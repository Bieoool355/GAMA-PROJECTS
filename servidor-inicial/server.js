// Sintaxe de importação no Node
const http = require("http");
// import http from 'http'

// Requisição = Request

// Resposta = Response

http
  .createServer((requisicao, resposta) => {
    resposta.writeHead(200, { "Content-Type": "application/json" });

    if (requisicao.url === "/cliente") {
      resposta.end(
        JSON.stringify({
          mensagem: "Rota de cliente",
        })
      );
    }

    resposta.end(
      JSON.stringify({
        mensagem: "Meu primeiro servidor HTTP",
      })
    );
  })
  .listen(4001, () => console.log("Servidor rodando na porta 4001"));
