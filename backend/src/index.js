const express = require('express');
const cors = requite('cors');
const routes = require("./routes");


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Métodos HTTP: 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deleter uma informação do back-end
 * 
 */

 /**
  * Tipos de Parâmetros:
  *
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos. 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. 
  */

  /**
   * SQL: MySQL, Oracle, SQLite
   * NoSQL: MongoDB, CouchDB, etc
   */
  /**
   * Driver: Select * from Users
   * Query Builder: table('users').select('*').where()
   */


app.listen(3030);