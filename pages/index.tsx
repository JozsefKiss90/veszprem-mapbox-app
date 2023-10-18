mapboxgl.accessToken = 'pk.eyJ1Ijoiam96c2Vma2lzcyIsImEiOiJjbG51dzR6ZXgwZHoyMmlxYzNoZW1mNDN3In0.XtchImmMmYc0zEcyiKFrgA'
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Home: NextPage = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapInstance = useRef<any>(null)
  const markersRef = useRef<Array<mapboxgl.Marker>>([])
  const start = useRef<number[] | null>([])
  const end = useRef<number[] | null>([])

  useEffect(() => {
    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current!,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [17.9115, 47.0910], 
        zoom: 12
      }) as any


      map.on('load', () => {
        mapInstance.current = map
      })

      map.on('click', (event) => addMarker(event))

      return () => {
        map.remove()
        markersRef.current.forEach(marker => marker.remove())
      }
    }

    if (mapContainerRef.current) {
      initializeMap()
    }
  }, [])

  const getMarkerCoordinates = () => {
    return markersRef.current.map(marker => marker.getLngLat())
  }
  

  const handleShowCoordinates = () => {
    const coordinates = getMarkerCoordinates()
    console.log(coordinates[0].lng)
  }

  const addMarker = (event: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
    if (mapInstance.current && markersRef.current.length < 3) {
      const marker = new mapboxgl.Marker().setLngLat(event.lngLat).addTo(mapInstance.current)
      markersRef.current.push(marker)
    } else {
      alert("Maximum 3 markers can be added!")
    } 

    if(markersRef.current.length > 2) {
      const coordinates = getMarkerCoordinates()
        start.current = [coordinates[0].lng,coordinates[0].lat]
        end.current = [coordinates[1].lng,coordinates[1].lat]
    }
  }

  return (
    <div>
      <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />
      <button onClick={handleShowCoordinates}>Show Marker Coordinates</button>

    </div>
  )
}

export default Home

