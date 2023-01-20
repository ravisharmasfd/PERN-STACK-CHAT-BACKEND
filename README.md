
# PERN STACK SOCIAL MEDIA BACKEND

  

Backend Api has been created with help of Node.js , PostgreSql and Express.js.

  

## **How to run this api in localhost**

Firstly clone this repo and create database in PostgreSQL and run commands of db.sql file in postgresql shell for creating table in pgsql after doing this create .env file like env.sample file.

Now install dependencies using yarn install or npm install after doing this run server using yarn run server or yarn run autoserver (autoserver for nodemon).

Now, you can run api using Postman.

## **API testing for Register**

url post :http://localhost:8080/api/v1/auth/register

body:{name,username,password}

## **API testing for Login**

url post :http://localhost:8080/api/v1/auth/login

body:{username,password}

header:{authorization: Bearer jwt token}

## **API testing for Create Message**

url post :http://localhost:8080/api/v1/auth/message

body:{message}

header:{authorization: Bearer jwt token}

## **API testing for Like/Dislike Message**

url post :http://localhost:8080/api/v1/auth/message/like:messageId

header:{authorization: Bearer jwt token}

## **API testing for Get Messages with likes and sort by latest**

url get:http://localhost:8080/api/v1/auth/message

## **API testing for Get Message with likes and sort by latest for unique messageId**

url get:http://localhost:8080/api/v1/auth/message:messageId