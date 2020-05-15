function leDados() {
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }
  else {
    objDados = {
      produtos: [
        { descricao: "Maçã", codigo: "123456", categoria: "alimentos", quantidade: "50", 
        valor: "1.00", armazem: "1", estante: "2", prateleira: "A", posicao: "0" },

        { descricao: "Detergente", codigo: "654321", categoria: "limpeza", quantidade: "20", 
        valor: "3.00", armazem: "1", estante: "3", prateleira: "D", posicao: "4" },

        { descricao: "Sapato", codigo: "987654", categoria: "roupas", quantidade: "5", 
        valor: "50.00", armazem: "1", estante: "1", prateleira: "B", posicao: "1" },
      ]
    }
  }

  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados));
}

function incluirProdutos() {
  // Ler os dados do localStorage
  let objDados = leDados();

  // Incluir um novo contato
  let strDescricao = document.getElementById('descricao').value;
  let strCodigo = document.getElementById('codigo').value;
  let strCategoria = document.getElementById('categoria').value;
  let strQuantidade = document.getElementById('quantidade').value;
  let strValor = document.getElementById('valor').value;
  let strArmazem = document.getElementById('armazem').value;
  let strEstante = document.getElementById('estante').value;
  let strPrateleira = document.getElementById('prateleira').value;
  let strPosicao = document.getElementById('posicao').value;
  let novoItem = {
    descricao: strDescricao, 
    codigo: strCodigo, 
    categoria: strCategoria, 
    quantidade: strQuantidade,
    valor: strValor, 
    armazem: strArmazem, 
    estante: strEstante, 
    prateleira: strPrateleira, 
    posicao: strPosicao
  };
  objDados.produtos.push(novoItem);

  // Salvar os dados no localStorage novamente
  salvaDados(objDados);

  // Atualiza os dados da tela
  imprimeDados();
}

function imprimeDados() {
  let tabela = document.getElementById('corpoTabela');
  let strHtml = '';
  let objDados = leDados();

  for (i = 0; i < objDados.produtos.length; i++) {
    strHtml += 
      `<tr>
        <td scope="row">${objDados.produtos[i].codigo}</td>
        <td>${objDados.produtos[i].descricao}</td>
        <td>${objDados.produtos[i].quantidade}</td>
        <td>${objDados.produtos[i].valor}</td>
        <td>${objDados.produtos[i].categoria}</td>
        <td>${objDados.produtos[i].armazem}</td>
        <td>${objDados.produtos[i].estante}</td>
        <td>${objDados.produtos[i].prateleira}</td>
        <td>${objDados.produtos[i].posicao}</td>
      </tr>`

  }

  tabela.innerHTML = strHtml;
}


// Configura os botões
document.getElementById('btnCarregaDados').addEventListener('click', imprimeDados);
document.getElementById('btnRegistrar').addEventListener('click', incluirProdutos);