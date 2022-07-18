<p align="center">
  <img  width=300px src="https://user-images.githubusercontent.com/97575616/179577739-c479c3da-e41d-444f-9b35-6d19ee08db20.png"
</p>
<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description
<p align="justify">
Browsing the internet can be a very fun activity, but at the same time, very dangerous. Numerous studies and surveys (national and international) show that the number of virtual scams continues to grow. Which raises the question: how to protect ourselves?
There are several different ways to protect yourself. It all starts with using different and secure passwords. For a password to be security, it must contain several characters and numbers mixed in, not to mention that the longer it ii, etc.
But how are we going to memorize giant passwords with no semantic meaning? It is to solve this pain that password managers were created! With them, 
we only create one “master” password and all other passwords kept secret! So when we need it, just remember the “master” password! <b>DrivenPass</b> is your newest password manager, where you can save data such as: credentials, networks, notes and cards

</p>

</br>

## Features

-   Sign In and Sign Up account
-   Create/Get/Delete Credentials
-   Create/Get/Delete Notes
-   Create/Get/Delete Networks
-   Create/Get/Delete Bank Cards                                                                                    

</br>

## API Reference

### AUTHENTICATION

### Sign Up

```http
POST /auth/signup
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `name`           | `string` | **Required**. user name       |
| `email`         | `string` | **Required**. user email          |
| `password` | `string` | **Required**. user password |
| `confirmPassword` | `string` | **Required**. user password |


`Password length min(10)`

#

#### Response:

```json
{
	"message": "user created"
}
```

### Sign In

```http
POST /auth/signin
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `name`           | `string` | **Required**. user name       |
| `email`         | `string` | **Required**. user email          |

#

#### Response:

```json
{
	"token": "jasonwebtoken (JWT)",
}
```

### CREDENTIALS

### Create a credential

```http
POST /credentials/${userId}/create
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `url`           | `string` | **Required**. credential url      |
| `username`         | `string` | **Required**. user name          |
| `password` | `string` | **Required**. credential password |
| `title` | `string` | **Required**. credential password |

#

#### Response:

```json
{
	"message": "credential created"
}
```

#

### Get all credentials by userId

```http
GET /credentials/${userId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"credentials": [
		{
			"id": 3,
			"url": "http://ultimate-certification.name",
			"username": "LorenzoFranco_Batista",
			"password": "v7GcM",
			"title": "Unifei",
			"createdAt": "2022-07-18T19:46:40.846Z",
			"userId": 2
		}
	]
}
```

#

### Get a specific credential by userId and credentialId

```http
GET /credentials/${userId}/${credentialId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |
| `credentialId` | `integer` | **Required**. credential Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"credential": [
		{
			"id": 3,
			"url": "http://ultimate-certification.name",
			"username": "LorenzoFranco_Batista",
			"password": "v7GcM",
			"title": "Unifei",
			"createdAt": "2022-07-18T19:46:40.846Z",
			"userId": 2
		}
	]
}
```

#

### Delete a specific credential by credentialId

```http
DELETE /credentials/${userId}/${credentialId}
```
#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |
| `credentialId` | `integer` | **Required**. credential Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"message": "credential deleted"
}
```

#

### SECRETE NOTES

### Create a note

```http
POST /notes/${userId}/create
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `title`           | `string` | **Required**. note title       |
| `content`         | `string` | **Required**. note content          |

`title length min(50) and max(1000)`

#### Response:

```json
{
	"message": "credential created"
}
```

#

### Get all notes by userId

```http
GET /notes/${userId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"notes": [
		{
			"id": 1,
			"title": "consequatur",
			"content": "Ratione suscipit nihil quia dolore sunt minima omnis.",
			"createdAt": "2022-07-18T13:02:20.263Z",
			"userId": 2
		}
	]
}
```

#

### Get a specific note by userId and noteId

```http
GET /notes/${userId}/${noteId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |
| `noteId` | `integer` | **Required**. note Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"note": {
		"id": 1,
		"title": "consequatur",
		"content": "Ratione suscipit nihil quia dolore sunt minima omnis.",
		"createdAt": "2022-07-18T13:02:20.263Z",
		"userId": 2
	}
}
```

#

### Delete a specific note by noteId

```http
DELETE /notes/${userId}/${notesId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |
| `noteId` | `integer` | **Required**. note Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"message": "Note deleted"
}
```

#

### CARDS

### Create a card

```http
POST /cards/${userId}/create
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `title`           | `string` | **Required**. card title       |
| `number`         | `string` | **Required**. card number          |
| `cardholderName`           | `string` | **Required**. card holder name       |
| `securityCode`         | `string` | **Required**. user card security code          |
| `expirationDate`           | `string` | **Required**. card expiration date       |
| `password`         | `string` | **Required**. card password          |
| `isVirtual`           | `boolean` | **Required**. card is virtual       |
| `type`         | `string` | **Required**. user type          |

`Number Format: "1111 1111 1111 1111"`

`Expiration Date Format: "MM/YY"`

`Password length: 4 and only numeric characters`

`Security Code length: 3 and only numeric characters`

`Valid types: [credit, debit, both]`

#### Response:

```json
{
	"message": "card created"
}
```

#

### Get all cards by userId

```http
GET /cards/${userId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"cards": [
		{
			"id": 2,
			"title": "vel qui expedita",
			"number": "1089 8176 0498 7127",
			"cardholderName": "CARLA H SILVA",
			"securityCode": "206",
			"expirationDate": "07/27",
			"password": "4964",
			"isVirtual": false,
			"type": "both",
			"createdAt": "2022-07-18T13:03:16.959Z",
			"userId": 1
		}
	]
}
```

#

### Get a specific card by userId and cardId

```http
GET /cards/${userId}/${cardId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |
| `cardId` | `integer` | **Required**. card Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"card": {
		"id": 1,
		"title": "sed doloribus qui",
		"number": "3650 3177 0788 8589",
		"cardholderName": "CARLA H SILVA",
		"securityCode": "682",
		"expirationDate": "07/27",
		"password": "1265",
		"isVirtual": false,
		"type": "both",
		"createdAt": "2022-07-18T13:03:01.120Z",
		"userId": 1
	}
}
```

#

### Delete a specific card by cardId

```http
DELETE /cards/${userId}/${cardId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |
| `cardId` | `integer` | **Required**. card Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
  "message": "card deleted"
}
```

#

### NETWORKS

### Create a network

```http
POST /wifis/${userId}/create
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `title`           | `string` | **Required**. wifi title       |
| `name`         | `string` | **Required**. wifi name          |
| `password`         | `string` | **Required**. wifi password          |

#### Response:

```json
{
  "message": "wifi created"
}
```

#

### Get all wifis by userId

```http
GET /wifis/${userId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
  	"wifis": [
		{
			"id": 1,
			"title": "sit",
			"name": "possimus",
			"password": "xSxR7jefH4rZ3aB",
			"createdAt": "2022-07-18T13:03:46.190Z",
			"userId": 1
		}
	]
}
```

#

### Get a specific note by userId and wifiId

```http
GET /wifis/${userId}/${wifiId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |
| `wifiId` | `integer` | **Required**. wifi Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"wifi": {
		"id": 1,
		"title": "sit",
		"name": "possimus",
		"password": "xSxR7jefH4rZ3aB",
		"createdAt": "2022-07-18T13:03:46.190Z",
		"userId": 1
	}
}
```

#

### Delete a specific note by wifiId

```http
DELETE /wifis/${userId}/${wifiId}
```

#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `userId` | `integer` | **Required**. user Id |
| `wifiId` | `integer` | **Required**. wifi Id |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication Bearer Token` | `string` | **Required**. token |

####

#### Response:

```json
{
	"message": "Wifi deleted"
}
```

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`JWT_SECRET = any string`

`CRYPTR_SECRET = any string`


</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/thalesgomest/drivenpass-API.git
```

Go to the project directory

```bash
  cd drivenpass-API/
```

Install dependencies

```bash
  npm install
```# drivenpass-API

Start the server

```bash
  npm run start
```

</br>

## Lessons Learned

In this project I learned a lot about how to structure an API with TypeScript and database with Prisma

</br>


### Author
---
<div align="center">
<img width= 200px src="https://user-images.githubusercontent.com/97575616/157583676-812b2612-a644-4c18-be9c-61f633406f50.png" alt=""/>
  <p> <i><b>Thales Gomes Targino</i></b> </p>

<br /> [![Twitter Badge](https://img.shields.io/badge/-@thales_targino-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/thales_targino)](https://twitter.com/thales_targino) [![Linkedin Badge](https://img.shields.io/badge/-thalesgomest-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thales-gomes-targino/)](https://www.linkedin.com/in/thales-gomes-targino/) 
[![Gmail Badge](https://img.shields.io/badge/-thalestargino@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thalestargino@gmail.com)](mailto:thalestargino@gmail.com)
  
</div>
