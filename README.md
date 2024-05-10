## Inicianando projeto

- Clone do repositorio

```sh
https://github.com/Carlosgadelha/teste_sync360io_carlos_gadelha/
```

### Configurando banco de dados localmente

- Nescessario ter o postgress instalado, caso não tenha recomenda-se utilizar a secção de configuração utilizado o Docker.
- Configurando as variaveis de ambiente
-- **crie um arquivo`.env` dentro da pasta back seguindo o template `.env.template`**
-- **obs: modifique os dados de acordo com as confirunção do seu banco, tais como usuario e senha**

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
- Configurando as variaveis de ambiente
-- **crie um arquivo`.env` dentro da pasta back seguindo com os dados abaixo**
```
DATABASE_URL="postgresql://postgres:postgres@db_postgres_my_profile/mydb?schema=public"
SHADOW_DATABASE_URL= "postgresql://postgres:postgres@db_postgres_my_profile/mydb?schema=public
PORT=5000
```
- Executando BackEnd

```sh
cd back && npm run docker:dev
```
- A aplicação estará executando em :
```
http://localhost
```
### Iniciando frontEnd

- abrindo a pasta fontEnd `cd front`
- Instalando dependencias `npm i`
- Configurando as variaveis de ambiente
-- **crie um arquivo`.env` dentro da pasta back seguindo o template `.env.template`**
```
VITE_BASE_URL='http://localhost:5000'
```
- execute `npm run dev` para iniciar a  aplicação
- A aplicação estará executando em :
```
http://localhost:5173
```


