---
# Veszprém navigation app

The app showcases the features of mapbox gl js library for creating custom online interactive maps. The app utilizes marker and route management while ensuring a user-friendly interface. Upon start the user navigated to the city of Veszprém where he/she can add markers, plan routes for different route profiles and modify the style of the created routes.

## 🛠️ Built with

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Mapbox JS](https://img.shields.io/badge/mapbox-3cc900?style=for-the-badge&logo=mapbox&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
## 🚀 Installation
To run the Mapbox locally using Docker:
```
docker build -t veszprem-mapbox-app .
```
then run
```
docker run -p 3000:3000 -e NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_access_token veszprem-mapbox-app
```
or pull form dockerhub
```
docker pull jozsefkiss90/veszprem-mapbox-app:latest
```
then run
```
docker run -p 3000:3000 -e NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_access_token jozsefkiss90/veszprem-mapbox-app:latest
```
To run the Mapbox app locally using npm:
In the terminal run command: 
```
npm run build
```
then run
```
npm run start
```

---
