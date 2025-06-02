**Repositório de Backend**: [https://github.com/mateusramoscaetano/back-integral-m05-t10)

**Repositório de Frontend**:(https://github.com/mateusramoscaetano/front-integral-m05-t10)

**URL da aplicação funcionando**: (https://effulgent-centaur-c78cd5.netlify.app)


**Pull Request (PR) de Backend**:https://github.com/cubos-academy/back-integral-m05-t10/pull/18

**Pull Request (PR) de Frontend**:https://github.com/cubos-academy/front-integral-m05-t10/pull/15

# Desafio Final Equipe 4 Documentação

Uma api desenvolvida pelos alunos da turma 10 Desenvolvimento de Software da Cubos Academy. Essa api é consumida por um site onde o usuário (empresa) pode gerenciar as cobranças relacionadas a seus clientes.

## Instalação

Clone o respositório : https://github.com/mateusramoscaetano/back-integral-m05-t10

```bash
  npm install 
```

* Configurar variaveis de ambiente seguindo o .env.example
* Rodar o schema.sql no seu banco de dados

* Para iniciar o servidor
```bash
  npm run dev 
```    

## Documentação da API

### Users

### Verifica se o usuário pode ser cadastrado

```http
  POST /users/check-email
```

 Obrigatório                          |
 :---------------------------------- |
 Email e nome do usuário. |

#### Request :

```
{
  "name": "Wendel",
  "email":"wendel@example.com"
}
```

#### Success Response (200) :

```
{
	"canRegister": true
}
```

#### Error Response (400) : 

```
{
	"message": "User already registered",
	"type": "BadRequestError",
	"canRegister": false
}
```

### Cadastra o usuário

```http
  POST /users/register
```

 Obrigatório                          |
 :---------------------------------- |
 Nome, email e senha do usuário. |

#### Request :

```
{
  "name": "Wendel",
  "email":"wendel@example.com",
  "password":"12345"
}
```

#### Success Response (201) :

```
{
	"user": {
		"id": 1,
		"name": "Wendel",
    		"email":"wendel@example.com",
		"cpf": null,
		"phone": null,
		"createdat": "2023-08-14T16:46:25.937Z",
		"updatedat": "2023-08-14T16:46:25.937Z"
	}
}
```

#### Error Response (400) : 

```
{
	"message": "The name field is required"
}

ou 

{
	"message": "The email field is required"
}

ou

{
	"message": "The password field is required"
}

ou 

{
	"message": "Email already registered",
	"type": "BadRequestError"
}
```

### Faz o login do usuário

```http
  POST /auth/login
```

 Obrigatório                          |
 :---------------------------------- |
 Email e senha do usuário. |

#### Request :

```
{
  "email":"wendel@example.com",
  "password": "12345"
}
```

#### Success Response (200) :

```
{
	"user": {
		"id": 1,
		"name": "Wendel",
		"email": "wendel@example.com",
		"cpf": "null",
		"phone": "null",
		"createdat": "2023-07-30T13:24:38.871Z",
		"updatedat": "2023-07-30T13:24:38.871Z"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6I..."
}
```

#### Error Response (400) : 

```
{
	"message": "Email or Password invalid",
	"type": "UnauthorizedError"
}
```

### Recupera as informações do usuário logado

```http
  GET /users/profile
```

 Obrigatório                          |
 :---------------------------------- |
 Token de autenticação. |


#### Success Response (200) :

```
{
		"id": 1,
		"name": "Wendel",
		"email": "wendel@example.com",
		"cpf": "null",
		"phone": "null",
		"createdat": "2023-07-30T13:24:38.871Z",
		"updatedat": "2023-07-30T13:24:38.871Z"
}
```

#### Error Response (401) : 

```
{
	"message": "Unhauthorized"
}
```

### Edita as informações do usuário logado

```http
  PUT /users/edit/profile
```
   |Opcional |
|----------|
 Nome, email, cpf, telefone e senha

#### Request :

```
// Name,email, cpf, phone e passsword são opcionais porém nao podem retornar vazios, 
caso nao atualize se mantem os dados do cadastro.

{
	"cpf": "12345678909",
	"name": "Wendel",
	"email": "wendel@example.com",
	"password": "12345",
	"phone": "545434432"
}
```


#### Success Response (200) :

```
{
	"user": {
		"id": 1,
	  "name": "Wendel",
		"email": "wendel@example.com",
		"phone": "5454",
		"createdat": "2023-07-30T13:24:38.871Z",
		"updatedat": "2023-07-30T13:24:38.871Z"
	}
}
```

#### Error Response (400) : 

```
{
	"message": "Cpf already registered",
	"type": "BadRequestError"
}

ou

{
	"message": "Email already registered",
	"type": "BadRequestError"
}
```

### Clients

### Recupera todos os clientes do usuário logado, recebe parametros de pesquisa tambem. 

```http
  GET /users/clients/client-page
  ```

 Obrigatório                          |
 :---------------------------------- |
 Token de autenticação. |

 #### Query params :

 page    |
 :------:|
 Numero da pagina atual |

 name |
 :---|
 Nome do cliente |

  email |
 :---|
 Email do cliente |

  cpf |
 :---|
 Cpf do cliente |

  alphabetical |
 :---|
 Quando true trás ordenado em asc, se false trás em desc |

 status_client |
 :----|
 Status do cliente ( paidup or in_arrears)

#### Exemplo de uso do query :

```http
  GET /users/clients/client-page?page=1&name=m&email=mat&cpf=09455&alphabetical=false&status_client=in_arrears
  ```

 #### Success Response (200) :

 ```
 {
  "data": [
    {
      "id": 1,
      "name": "Fulano de Tal",
      "email": "fulano@example.com",
      "cpf": "123.456.789-00", 
      "phone": "(00) 1234-5678",
      "address": "Rua dos Clientes, 123",
      "cep": "12345-678",
      "complement": "Ap 101",
      "district": "Centro",
      "city": "São Paulo",
      "uf": "SP",
      "status": "paidup",
      "createdAt": "2023-07-28T12:34:56.789Z",
      "updatedAt": "2023-07-28T12:34:56.789Z"
    },
    // restante dos clientes
  ],
  "currentPage": 2,
  "totalPages": 5
}
 ```

 ###  Retorna todos os clientes em dia.

```http
  GET /clients/paidup
  ```

   Obrigatório                          |
 :---------------------------------- |
 Token de autenticação. |

#### Success Response (200) :

```
[
	{
		"id": 72,
		"user_id": 1,
		"name": "leandro",
		"email": "dasiudj@hjdiahs.com",
		"cpf": "43287473278",
		"phone": "74382748327",
		"address": "hsaudha",
		"cep": "21783781",
		"complement": "duashdu",
		"district": "dhjasd",
		"city": "hsuadh",
		"uf": "hudhsa",
		"status": "paidup",
		"createdat": "2023-08-03T23:38:29.150Z",
		"updatedat": "2023-08-03T23:38:29.150Z"
	},
	{
		"id": 75,
		"user_id": 1,
		"name": "maria joaquina",
		"email": "hdsauh@hduashdh.com",
		"cpf": "12738738273",
		"phone": "27381381273",
		"address": "812738127",
		"cep": "81738172",
		"complement": "87318",
		"district": "87837218",
		"city": "787121",
		"uf": "312",
		"status": "paidup",
		"createdat": "2023-08-03T23:43:23.709Z",
		"updatedat": "2023-08-03T23:43:23.709Z"
	},
  //restante dos clientes em dia
]
```

### Retorna todos os clientes inadimplentes.

```http
  GET /clients/in-arrears
  ```

   Obrigatório                          |
 :---------------------------------- |
 Token de autenticação. |

#### Success Response (200) :

```
[
	{
		"id": 72,
		"user_id": 1,
		"name": "leandro",
		"email": "dasiudj@hjdiahs.com",
		"cpf": "43287473278",
		"phone": "74382748327",
		"address": "hsaudha",
		"cep": "21783781",
		"complement": "duashdu",
		"district": "dhjasd",
		"city": "hsuadh",
		"uf": "hudhsa",
		"status": "in_arrears",
		"createdat": "2023-08-03T23:38:29.150Z",
		"updatedat": "2023-08-03T23:38:29.150Z"
	},
	{
		"id": 75,
		"user_id": 1,
		"name": "maria joaquina",
		"email": "hdsauh@hduashdh.com",
		"cpf": "12738738273",
		"phone": "27381381273",
		"address": "812738127",
		"cep": "81738172",
		"complement": "87318",
		"district": "87837218",
		"city": "787121",
		"uf": "312",
		"status": "in_arrears",
		"createdat": "2023-08-03T23:43:23.709Z",
		"updatedat": "2023-08-03T23:43:23.709Z"
	},
  //restante dos clientes em dia
]
```

### Retorna o cliente baseado no id fornecido.

```http
  GET /clients/:id
  ```

   Obrigatório                          |parametros |
 :---------------------------------- |:--|
 Token de autenticação. | Id do cliente

#### Success Response (200) :

```
{
	"client": {
		"id": 107,
		"user_id": 1,
		"name": "Juan Carlos",
		"email": "catarino@email.com",
		"cpf": "09455132910",
		"phone": "15246562145",
		"address": "Caqui",
		"cep": "78787878",
		"complement": "ali",
		"district": "41255632",
		"city": "rua",
		"uf": "pr",
		"status": "paidup",
		"createdat": "2023-08-04T14:37:40.945Z",
		"updatedat": "2023-08-04T14:37:40.945Z"
	}
}
```

#### Error Response (404) : 

```
{
	"message": "Client not found",
	"type": "NotFoundError"
}
```

### Atualiza o status do cliente baseado no id.

```http
  GET /clients/update/status/:id
  ```

   Obrigatório                          |parametros |
 :---------------------------------- |:--|
 Token de autenticação. | Id do cliente

#### Success Response (200) :

```
"Client status updated"
```

#### Error Response (404) : 

```
{
	"message": "Client not found",
	"type": "NotFoundError"
}
```

### Atualiza todos os status dos clientes.

```http
  GET /clients/update/status/
  ```

   Obrigatório                          
 :---------------------------------- 
 Token de autenticação. 

#### Success Response (200) :

```
"All clients updated"
```

### Cadastra o cliente.

```http
  POST /clients/register
  ```

   Obrigatório               | opcional |           
 :---------------------------------- |:--|
 Token de autenticação, nome , email, cpf e telefone | Logradouro, Complemento, Bairro, Cidade e Estado|

 #### Request :

 ```
 {
   "name":"Wendel",
   "email":"wendel@test.com",
   "cpf":"09875365442",
   "phone":"56895785665",
   "address":"Rua das Pitangas",
   "complement":"Casa 2",
   "cep":"85456231",
   "district":"Flores",
   "city":"São Paulo",
   "uf":"SP"
}
 ```

#### Success Response (200) :

```
{
	"client": 
    {
      "id": 240,
      "user_id": 1,
      "name": "Wendel",
      "email": "wendel@test.com",
      "cpf": "09875365442",
      "phone": "56895785665",
      "address": "Rua das Pitangas",
      "cep": "85456231",
      "complement": "Casa 2",
      "district": "Flores",
      "city": "São Paulo",
      "uf": "SP",
      "status": "paidup",
      "createdat": "2023-08-14T18:17:59.063Z",
      "updatedat": "2023-08-14T18:17:59.063Z"
    }
}
```

#### Error Response (400)

```
{
	"message": "the name field is required"
}

ou

{
	"message": "the email field is required"
}

ou

{
	"message": "the cpf field is required"
}

ou

{
	"message": "the phone field is required"
}

ou

{
	"message": "Email already registered",
	"type": "BadRequestError"
}

ou

{
	"message": "CPF already registered",
	"type": "BadRequestError"
}

```

### Edita o cliente.

```http
  PUT /clients/edit/profile/:id
  ```

   Obrigatório               | parâmetros |           
 :---------------------------------- |:--|
 Token de autenticação | Id do cliente

 #### Request :

 ```
 {
   "name":"Wendel",
   "email":"wendel@test.com",
   "cpf":"09875365442",
   "phone":"56895785665",
   "address":"Rua das Pitangas",
   "complement":"Casa 2",
   "cep":"85456231",
   "district":"Flores",
   "city":"São Paulo",
   "uf":"SP"
}
 ```

#### Success Response (200) :

```
{
	"client": 
    {
      "id": 240,
      "user_id": 1,
      "name": "Wendel",
      "email": "wendel@test.com",
      "cpf": "09875365442",
      "phone": "56895785665",
      "address": "Rua das Pitangas",
      "cep": "85456231",
      "complement": "Casa 2",
      "district": "Flores",
      "city": "São Paulo",
      "uf": "SP",
      "status": "paidup",
      "createdat": "2023-08-14T18:17:59.063Z",
      "updatedat": "2023-08-14T18:17:59.063Z"
    }
}
```

#### Error Response (400)

```
// Name,email, cpf e phone  são opcionais porém nao podem retornar vazios, 
caso nao atualize se mantem os dados do cadastro.

{
	"message": "the name field is required"
}

ou

{
	"message": "the email field is required"
}

ou

{
	"message": "the cpf field is required"
}

ou

{
	"message": "the phone field is required"
}

ou

{
	"message": "Email already registered",
	"type": "BadRequestError"
}

ou

{
	"message": "CPF already registered",
	"type": "BadRequestError"
}

```

### Charges

### Recupera todos as cobranças do usuário logado, recebe parametros de pesquisa tambem. 

```http
  GET /users/charges/charge-page
  ```

 Obrigatório                          |
 :---------------------------------- |
 Token de autenticação. |

 #### Query params :


 name |
 :---|
 Nome do cliente |

  charge_id |
 :---|
id da cobrança  |

  alphabetical |
 :---|
 Quando true trás ordenado alfabeticamente em asc, se false trás em desc |

 status_charge |
 :----|
 Status da cobrança ( paid , expected ou overdue)

   numericOrder |
 :---|
 Quando true trás ordenado numericamente em asc, se false trás em desc |

#### Exemplo de uso do query :

```http
  GET /users/charges/charge-page?page=1&charge_id=39&name&alphabetical=false&status_charge=paid&numericOrder=false
  ```

 #### Success Response (200) :

 ```
 {
	"data": [
		{
			"charge_id": 53,
			"user_id": 1,
			"client_id": 196,
			"name": "mateteu",
			"status": "paid",
			"description": "agua",
			"due_date": "2023-12-12T03:00:00.000Z",
			"value": 2522,
			"createdat": "2023-08-12T13:26:56.138Z",
			"updatedat": "2023-08-12T13:26:56.138Z"
		},
		{
			"charge_id": 51,
			"user_id": 1,
			"client_id": 107,
			"name": "Juan Carlos",
			"status": "expected",
			"description": "luz",
			"due_date": "2023-12-02T03:00:00.000Z",
			"value": 9600,
			"createdat": "2023-08-11T21:32:34.322Z",
			"updatedat": "2023-08-11T21:32:34.322Z"
		},
	 // restante das cobranças
	
	],
	"currentPage": "1",
	"totalPages": 1
}
 ```

 ### Atualiza todos os status das cobranças.

```http
  GET /charges/update/status/
  ```

   Obrigatório                          
 :---------------------------------- 
 Token de autenticação. 

#### Success Response (200) :

```
{
	"message": "All charges status updated"
}
```

### Cadastra uma cobrança

```http
  POST /charges/register/:id
  ```

  
   Obrigatório                          
 :---------------------------------- 
 Token de autenticação. 

#### Request :

```
 // O value é passado em centavps e a due_date é passada no formato yyy--MM--dd.
{
	"value":15000,
     "status":"overdue",
     "description":"lorem lorem ipsum",
     "due_date":"12/05/2023",
	"name":"Juan Carlos"
}

```

#### Success Response (201):

```
{
	"charge": {
		"charge_id": 94,
		"user_id": 1,
		"client_id": 107,
		"name": "Juan Carlos",
		"status": "overdue",
		"description": "lorem lorem ipsum",
		"due_date": "2023-12-05T03:00:00.000Z",
		"value": 15000,
		"createdat": "2023-08-14T18:14:37.308Z",
		"updatedat": "2023-08-14T18:14:37.308Z"
	}
}
```

#### Error Response (400)

```
{
	"message": "the name field is required"
}

ou

{
	"message": "the value field is required"
}

ou

{
	"message": "the due_date field is required"
}

ou

{
	"message": "the description field is required"
}

ou

// Não é possível cadastrar uma cobrança com status expected com uma data de vencimento menor que a data atual

{
	"message": "Can't register a charge with expected status and due date less than current date",
	"type": "BadRequestError"
}

```

### Recupera todas as cobrançass baseado no id do cliente.

```http
  GET /clients/charges/:id
  ```

   Obrigatório               | parâmetros |           
 :---------------------------------- |:--|
 Token de autenticação | Id do cliente

#### Success Response (200) :

```
{
	"charges": [
		{
			"charge_id": 44,
			"user_id": 37,
			"client_id": 200,
			"name": "carlos",
			"status": "expected",
			"description": "dwedfwe",
			"due_date": "2023-08-26T03:00:00.000Z",
			"value": 35464,
			"createdat": "2023-08-10T22:57:10.792Z",
			"updatedat": "2023-08-10T22:57:10.792Z"
		},
		{
			"charge_id": 45,
			"user_id": 37,
			"client_id": 200,
			"name": "carlos",
			"status": "paid",
			"description": "dfsdf",
			"due_date": "2023-09-15T03:00:00.000Z",
			"value": 5644684,
			"createdat": "2023-08-10T23:09:07.480Z",
			"updatedat": "2023-08-10T23:09:07.480Z"
		}
	]
}
```

#### Error Response (404):

```
{
	"message": "Client not found",
	"type": "NotFoundError"
}
```

 ### Recupera todas as cobranças pagas juntamente com o valor total.

```http
  GET /charges/paid
  ```

   Obrigatório                          
 :---------------------------------- 
 Token de autenticação. 

#### Success Response (200) :

```
{
	"charges": [
		{
			"charge_id": 9,
			"user_id": 1,
			"client_id": 113,
			"name": "teste",
			"status": "paid",
			"description": "oculos",
			"due_date": "2023-06-12T03:00:00.000Z",
			"value": 5000,
			"createdat": "2023-08-05T15:53:02.777Z",
			"updatedat": "2023-08-05T15:53:02.777Z"
		},
		 // restante das cobranças pagas
	],
	"totalValue": 31500
}
```

 ### Recupera todas as cobranças previstas juntamente com o valor total.

```http
  GET /charges/expected
  ```

   Obrigatório                          
 :---------------------------------- 
 Token de autenticação. 

#### Success Response (200) :

```
{
	"charges": [
		{
			"charge_id": 9,
			"user_id": 1,
			"client_id": 113,
			"name": "teste",
			"status": "expected",
			"description": "oculos",
			"due_date": "2023-06-12T03:00:00.000Z",
			"value": 5000,
			"createdat": "2023-08-05T15:53:02.777Z",
			"updatedat": "2023-08-05T15:53:02.777Z"
		},
		 // restante das cobranças previstas
	],
	"totalValue": 31500
}
```

 ### Recupera todas as cobranças vencidass juntamente com o valor total.

```http
  GET /charges/overdue
  ```

   Obrigatório                          
 :---------------------------------- 
 Token de autenticação. 

#### Success Response (200) :

```
{
	"charges": [
		{
			"charge_id": 9,
			"user_id": 1,
			"client_id": 113,
			"name": "teste",
			"status": "overdue",
			"description": "oculos",
			"due_date": "2023-06-12T03:00:00.000Z",
			"value": 5000,
			"createdat": "2023-08-05T15:53:02.777Z",
			"updatedat": "2023-08-05T15:53:02.777Z"
		},
		 // restante das cobranças vewncidas
	],
	"totalValue": 31500
}
```

 ### Recupera a cobranças baseada no id.

```http
  GET /charges/:id
  ```

   Obrigatório               | parametros          
 :---------------------------------- |:--|
 Token de autenticação. | Id da cobrança

#### Success Response (200) :

```
{
	"charge": {
		"charge_id": 103,
		"user_id": 6,
		"client_id": 238,
		"name": "João da sillva",
		"status": "expected",
		"description": "tem pagar",
		"due_date": "2024-05-14T03:00:00.000Z",
		"value": 21414141,
		"createdat": "2023-08-14T20:47:18.235Z",
		"updatedat": "2023-08-14T20:47:18.235Z"
	}
}
```

#### Error Response (404)

```
{
	"message": "Charge not found",
	"type": "NotFoundError"
}
```

 ### Deleta uma cobrança baseada no id.

```http
  DELETE /charges/:id
  ```

   Obrigatório               | parametros          
 :---------------------------------- |:--|
 Token de autenticação. | Id da cobrança

#### Success Response (200) :

```
"Successfully deleted"
```

#### Error Response (404)

```
{
	"message": "Charge not found",
	"type": "NotFoundError"
}
```

### Edita uma cobrança 

```http
  PUT /charges/edit/:id
  ```


   Obrigatório               | parametros          
 :---------------------------------- |:--|
 Token de autenticação. | Id da cobrança

#### Request :

```
// O value é passado em centavps e a due_date é passada no formato yyy--MM--dd.
{
	"value":15000,
  "status":"overdue",
  "description":"lorem lorem ipsum",
  "due_date":"12/05/2023",
	"name":"Juan Carlos"
}

```

#### Success Response (201):

```
{
	"charge": {
		"charge_id": 94,
		"user_id": 1,
		"client_id": 107,
		"name": "Juan Carlos",
		"status": "overdue",
		"description": "lorem lorem ipsum",
		"due_date": "2023-12-05T03:00:00.000Z",
		"value": 15000,
		"createdat": "2023-08-14T18:14:37.308Z",
		"updatedat": "2023-08-14T18:14:37.308Z"
	}
}
```

#### Error Response (400)

```
// Name,value, due_date e description são opcionais porém nao podem retornar vazios, 
caso nao atualize se mantem os dados do cadastro.

{
	"message": "the name field is required"
}

ou

{
	"message": "the value field is required"
}

ou

{
	"message": "the due_date field is required"
}

ou

{
	"message": "the description field is required"
}

ou

// Não é possível editar uma cobrança inserindo status expected com uma data de vencimento menor que a data atual

{
	"message": "Can't register a charge with expected status and due date less than current date",
	"type": "BadRequestError"
}

```
