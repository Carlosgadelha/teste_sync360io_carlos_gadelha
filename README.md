## Download do projeto

- Clone do repositorio

```sh
https://github.com/Carlosgadelha/teste_sync360io_carlos_gadelha/
```

### Configurando o banco de dados localmente

- Nescessario ter o postgress instalado, caso não tenha recomenda-se utilizar a secção de configuração utilizando o Docker.

#### Configurando as variaveis de ambiente

- **crie um arquivo`.env` dentro da pasta back seguindo o template `.env.template`**
- **obs: modifique os dados de acordo com as confirunção do seu banco, tais como usuario e senha**

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/bd?schema=public"
SHADOW_DATABASE_URL= "postgresql://postgres:postgres@localhost:5432/bd?schema=public"
PORT=5000
```

- Aplicando as migrações ao banco.

```sh
cd back && npm run prisma deploy
```

- Executando BackEnd

```sh
cd back && npm run dev
```

- A aplicação estará executando em :

```
http://localhost:5000
```

### Configurando BackEnd via Docker

- Nescessario ter o Docker e docker-compose instalados.

#### Configurando as variaveis de ambiente

- **crie um arquivo`.env` dentro da pasta back seguindo com os dados abaixo**

```
DATABASE_URL="postgresql://postgres:postgres@db_postgres_my_profile/mydb?schema=public"
SHADOW_DATABASE_URL= "postgresql://postgres:postgres@db_postgres_my_profile/mydb?schema=public
PORT=5000
```

- Executando BackEnd

```sh
cd back && npm run docker:dev
```

- A aplicação estará executando em:

```
http://localhost
```

## Usando a API

### `POST`

- `/newProfile`: Criando um novo perfil
  - Body:

```
    {
        "name": "Carlos",
        "age": 26,
	    "profile_name": "",
	    "biography": "Ola so o Carlos, um desenvolvedor apaixonado pelo poder de tranformção da tecnogia em geral. Tenho graduação em engenharia da computação pela UFC"
    }
```

### `GET`

- `/getUserById/:userId`: Obter dados de um usuario pelo ID

### `PATCH`

- `/updateUser`: Atualizando dados de uma usuario
  - Body:

```
    {
        "name": "Carlos Gadelha",
        "age": 26,
	    "profile_name": "image.jpg",
	    "biography": "Ola so o Carlos, um desenvolvedor apaixonado pelo poder de tranformção da tecnogia em geral. Tenho graduação em engenharia da computação pela UFC"
    }
```


### `POST`

- `/newAddress`: Criando novo endereço
  - Body:

```
    {
        "number": "",
        "city": "sobral",
        "complement": "",
        "district": "",
        "state": "ceara",
        "stree_address": "",
        "zip_code": "62040140",
        "userId": 1
    }
```

### `PATCH`

- `/updateAddress`: Atualizando dados endereço
  - Body:

```
    {
        "number": "",
        "city": "sobral",
        "complement": "",
        "district": "",
        "state": "ceara",
        "stree_address": "",
        "zip_code": "62040140",
        "userId": 1
    }
```

### `POST`

- `/uploadProfileImage`: Upload Imagem Perfil
  - Multpart:

```
    file: arquivo_imagem
```
    - Response

```
    {
	    "fileName": "1715211414778.jpg"
    }
```


### Iniciando frontEnd

- abrindo a pasta fontEnd `cd front`
- Instalando dependencias `npm i`
- Configurando as variaveis de ambiente
  -- **crie um arquivo`.env` dentro da pasta back seguindo o template `.env.template`**

```
VITE_BASE_URL='http://localhost:5000'
```

- execute `npm run dev` para iniciar a aplicação
- A aplicação estará executando em :

```
http://localhost:5173
```
