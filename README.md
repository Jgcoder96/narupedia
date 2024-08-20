# NARUAPI

## SignUp

`POST` http://localhost:4000/api/auth/signup

**Headers**

Content-Type: application/json

**Body**

`{
	"username": string,
	"email": string,
	"password": string
}`

## SignIn

`POST` http://localhost:4000/api/auth/signup

**Headers**

Content-Type: application/json

**Body**

`{
	"username": string,
	"password": string
}`

## GET Characters

Get all the characters

`GET` http://localhost:4000/api/characters

Get all the characters with pagination

`GET` http://localhost:4000/api/characters?page=0&limit=20

Get character

`GET` http://localhost:4000/api/characters/45

**Headers**

x-access-token: token

## GET Villages

Get all the villages

`GET` http://localhost:4000/api/villages

Get village

`GET` http://localhost:4000/api/villages/16

**Headers**

x-access-token: token

## GET Clans

Get all the clans

`GET` http://localhost:4000/api/clans

Get clan

`GET` http://localhost:4000/api/clans/45

**Headers**

x-access-token: token

## GET Kekkeigenkai

Get all the kekkeigenkai

`GET` http://localhost:4000/api/kekkeigenkai

Get kekkeigenkai

`GET` http://localhost:4000/api/kekkeigenkai/1

**Headers**

x-access-token: token
