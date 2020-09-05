
# CRUD patients salvus
## Descrição

- CRUD de pacientes feito em nodejs com banco de dados remoto(ElephantSQL).

## Observações :

- O "__.env__" não foi adicionado ao gitignore, por ser um banco de dados que após ser avalidado, sera apagado.
- O id da entidade não começara do inicio(valor numerico '1'), pois alguns dados ja foram manipulados para teste no ElephantSQL.

### Pré-requisito para rodar em sua maquina

- Ter instalado o [Node.js](https://nodejs.org/en/)
- Ter instalado o [postgresSQL](https://www.postgresql.org/download/)
- Ter o yarn em sua maquina [Yarn](https://yarnpkg.com/getting-started)
- Inserir 'yarn install' e logo apos carregar os modulos 'yarn dev' para rodar o servidor.
- Precisa ter o imsomnia ou o Postman intalado para testar as rotas.


# Rotas : 



## __GET '/api/patients'__
> Retorna todos os pacientes
- Retorna um json com a lista de todos os pacientes. E se estiver vazia, retorna uma mensagem informando que a lista esta vazia.

 ## __GET '/api/patients/:id'__
> Retorna informações do paciente pelo id
 - A request recebe o id do paciente na url e retorna um json com os dados do usuario.
 - Se o usuario não existir, sera retornado uma mensagem informando.

## __POST '/api/patients'__
> Cadastra o paciente
- A request recebe no corpo um json com o seguinte formato:

```
{
	"nome": "nome",
	"email": "nome@email.com",
	"cpf": "12345678910",
	"idade": 15
}
```
- E retorna os dados do paciente cadastrado em um json, caso ja exista, sera retornado uma mensagem informando.

## __PUT '/api/patients/:id'__
>Atualiza o paciente pelo id
- A request recebe o id do paciente na url. E no corpo, um json com o seguinte formato:
```
{
	"nome": "nome",
	"email": "nome@email.com",
	"cpf": "12345678910",
	"idade": 15
}
```

- É retornado uma mensagem quando a mudança é feita. Caso o usuario não seja encontrado, tambem é retornado uma mensagem informando.

## __DELETE '/api/patients/:id'__
> Deleta cadastro de paciente pelo id
- O request recebe o id do paciente na url e retorna uma mensagem confirmando que foi apagado. 
- Caso o usuario não seja encontrado, sera retornado uma mensagem informando.










