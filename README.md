Search Gate Kiosk


To set up application:

git clone <url here>

Commands:
docker-compose up --build

docker-compose down --rmi all

joins:

select * from user_table full outer join certification on cert_id = certification.id;

select * from weapon_user full join user_table on user_id = user_table.id full join weapon on weapon_id = weapon.id;

API Dependacies
- npm i nodemon
- npm install express
- npm i bcryptjs
- npm i cors
- npm i jsonwebtoken
- npm i pg

UI Dependencies
- npx create-react-app my-app
- npm i react-router-dom
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material
- npm i react-router-dom
- npm i nodemon
- npm i react-to-print 
- npm i react-apexcharts
-npm install --save sweetalert


to use with docker
    - docker-compose up --build
    - enter "username", "password", "admin" in postman to create a user
    

 # searchgate-kiosk-api
