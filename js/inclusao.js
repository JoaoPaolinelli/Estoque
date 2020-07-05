// pegar CNPJ da empresa:
var CNPJdaEmpresa = JSON.parse(localStorage.getItem('dados')).CNPJ;

function leDados() {
  let strDados = localStorage.getItem(`${CNPJdaEmpresa}`);
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }

  else {
    objDados = {
      produtos: [
        { descricao: "", 
          codigo: "",
          categoria: "", 
          quantidade: "", 
          valor: "", 
          armazem: "", 
          estante: "", 
          prateleira: "", 
          posicao: "" }
      ]
    }
  }

  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem(`${CNPJdaEmpresa}`, JSON.stringify(dados));
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
  let valorInicial = strQuantidade;
  let isComprado = false;
  let novoItem = {
    id: generateUUID(),
    descricao: strDescricao, 
    codigo: strCodigo, 
    categoria: strCategoria, 
    quantidade: strQuantidade,
    valor: strValor, 
    armazem: strArmazem, 
    estante: strEstante, 
    prateleira: strPrateleira, 
    posicao: strPosicao,
    valorInicial,
    isComprado
  };
  objDados.produtos.push(novoItem);

  // Salvar os dados no localStorage novamente
  salvaDados(objDados);

  // Atualiza os dados da tela
  imprimeDados();

  alert("Produto cadastrado com sucesso!");
}

function imprimeDados() {
  let tabela = document.getElementById('corpoTabela');
  let strHtml = '';
  let objDados = leDados();

  for (i = 1; i < objDados.produtos.length; i++) {
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

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if (d > 0) {//Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

// Configura os botões
document.getElementById('btnRegistrar').addEventListener('click', incluirProdutos);