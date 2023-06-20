const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Configuração do banco de dados
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'bookview', 
    port: 3306 
  });

// Middleware para analisar os dados do corpo da requisição
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para lidar com a solicitação de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Consulta ao banco de dados para verificar as credenciais
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    // Verifica se o usuário foi encontrado no banco de dados
    if (results.length > 0) {
      // Usuário autenticado com sucesso
      return res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      // Credenciais inválidas
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
  });
});

fetch('https://cdn.apicep.com/file/apicep/86183-500.jsonURL_DA_API', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      // Faça algo com os dados recebidos
      console.log(data);
    })
    .catch(error => {
      // Trate o erro
      console.error('Ocorreu um erro:', error);
    });
  

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
