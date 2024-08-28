# NARUAPI

## Project installation

- execute `npm install`
- create file **.env** with the environment variables of **.env.template**
- create database with name **narupedia**
- script
  - create database structure `npm run initialSetup`
  - insert seed into database `npm run createSeed`
  - create auth structure `npm run authSetup`
  - create admin to database `npm run createAdmin`

## Functions enabled for **USERS**

### SignUp

`POST` http://localhost:4000/api/auth/signup

**Headers**

Content-Type: application/json

**Body**

`{
	"username": string,
	"email": string,
	"password": string
}`

### SignIn

`POST` http://localhost:4000/api/auth/signup

**Headers**

Content-Type: application/json

**Body**

`{
	"username": string,
	"password": string
}`

### GET Characters

Get all the characters

`GET` http://localhost:4000/api/characters

Get all the characters with pagination

`GET` http://localhost:4000/api/characters?page=0&limit=20

Get character

`GET` http://localhost:4000/api/characters/45

**Headers**

x-access-token: token

### GET Villages

Get all the villages

`GET` http://localhost:4000/api/villages

Get village

`GET` http://localhost:4000/api/villages/16

**Headers**

x-access-token: token

### GET Clans

Get all the clans

`GET` http://localhost:4000/api/clans

Get clan

`GET` http://localhost:4000/api/clans/45

**Headers**

x-access-token: token

### GET Kekkeigenkai

Get all the kekkeigenkai

`GET` http://localhost:4000/api/kekkeigenkai

Get kekkeigenkai

`GET` http://localhost:4000/api/kekkeigenkai/1

**Headers**

x-access-token: token

## Functions enabled for **ADMIN**

### POST Characters

`POST` http://localhost:4000/api/characters

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"character": string
}`

### PUT Characters

`PUT` http://localhost:4000/api/characters

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"id": number, 
	"character": string
}`

### DELETE Characters

`DELETE` http://localhost:4000/api/characters

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"id": number
}`

### POST Village

`POST` http://localhost:4000/api/villages

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"village": string
}`

### PUT village

`PUT` http://localhost:4000/api/villages

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"id": number, 
	"village": string
}`

### DELETE village

`DELETE` http://localhost:4000/api/villages

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"id": number
}`

### POST Clan

`POST` http://localhost:4000/api/clans

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"village": string
}`

### PUT clan

`PUT` http://localhost:4000/api/clans

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"id": number, 
	"clan": string
}`

### DELETE clan

`DELETE` http://localhost:4000/api/clans

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"id": number
}`

### POST kekkeigenkai

`POST` http://localhost:4000/api/kekkeigenkai

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"kekkeigenkai": string
}`

### PUT kekkeigenkai

`PUT` http://localhost:4000/api/kekkeigenkai

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"id": number, 
	"kekkeigenkai": string
}`

### DELETE clan

`DELETE` http://localhost:4000/api/kekkeigenkai

**Headers**

x-access-token: token

Content-Type: application/json

**Body**

`{
	"id": number
}`



