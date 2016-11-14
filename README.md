## Weekend Assignment

### API Documentation

### Authentication: Sign-UP
	
 **POST** : /users/create

 Parameter

| Field         | Type          | 
| ------------- |:-------------:| 
| firstName     |   string      | 
| lastName      |   string      |
|  email        |   string      |
|  userName     |   string      |
|  password     |   string      |


### Authentication: Login

 **POST** : /login

 Parameter

| Field         | Type          |
| ------------- |:-------------:|
|  userName     |   string      |
|  password     |   string      |


### Links

**Read Links**
**GET** : /links

**Create Links**
**POST** : /links/create

 Header

| Field         | Type          |
| ------------- |:-------------:|
| Authorization |   string      |


Parameter

| Field         | Type          |
| ------------- |:-------------:|
|  title        |   string      |
|destination_url|   string      |



**Delete Links**
**POST** : /links/delete
 Header

| Field         | Type          |
| ------------- |:-------------:|
| Authorization |   string      |


###Comments 

**Read Comments**
**GET** : /links/comments

**Create Comments**
**POST** : /links/:linkID/comments/create

 Header

| Field         | Type          |
| ------------- |:-------------:|
| Authorization |   string      |


Parameter

| Field         | Type          |
| ------------- |:-------------:|
|  comment      |   string      |

**Delete Comments**
**POST** : /links/comments/delete
 Header

| Field         | Type          |
| ------------- |:-------------:|
| Authorization |   string      |


###Votes

**Add Votes**
**Post**: /links/:linkID/vote

Header

| Field         | Type          |
| ------------- |:-------------:|
| Authorization |   string      |