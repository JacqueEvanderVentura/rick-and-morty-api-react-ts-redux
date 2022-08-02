cd src
rm App.test.tsx index.css App.css logo.svg react-app-env.d.ts reportWebVitals.ts setupTests.ts
touch index.scss
mkdir Components
mkdir Views
mkdir Logic
mkdir Assets

sed -i -e '2,3d;7,22d' App.tsx
sed -i -e '3d;5d;16,20d' index.tsx
cd ../public
rm favicon.ico logo192.png logo512.png manifest.json robots.txt	