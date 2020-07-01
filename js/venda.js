var CNPJdaEmpresa = JSON.parse(localStorage.getItem('dados')).CNPJ;

leDados();
function leDados() {
  let strDados = localStorage.getItem(`${CNPJdaEmpresa}`);
  let objDados = {};
  if (strDados) {
    objDados = JSON.parse(strDados);
  }
  else {
    objDados = {
      produtos: [{ descricao: "", codigo: "", categoria: "", quantidade: "",valor: "", armazem: "", estante: "", prateleira: "", posicao: "" }]}
    }
  return objDados;
}


function pesquisarProdutos() {
  let db = JSON.parse(localStorage.getItem(`${CNPJdaEmpresa}`));
  let dados = [];
  let pesq = document.querySelector('#campo_pesquisa').value;
  for (i = 0; i < db.produtos.length; i++) {
      if (db.produtos[i].descricao.includes(pesq)) {
          dados.push(db.produtos[i]);
          
          
        }
        else {
          console.log('não achou nada');
        }
  }
  console.log(dados);
  imprimeDados(dados);
}


function imprimeDados(dados) {
  let tabela = document.querySelector('#corpoTabela');
  let strHtml = '';
  console.log('dados.lenght = ' + dados.length);

  for (i = 0; i < dados.length; i++) {
    strHtml += `
      <tr>
        <td scope="row">${dados[i].codigo}</td>
        <td>${dados[i].descricao}</td>
        <td>${dados[i].quantidade}</td>
        <td>${dados[i].valor}</td>
        <td>${dados[i].categoria}</td>
        <td>${dados[i].armazem}</td>
        <td>${dados[i].estante}</td>
        <td>${dados[i].prateleira}</td>
        <td>${dados[i].posicao}</td>
      </tr>
      `
  }

  tabela.innerHTML = strHtml;
}


console.log("fim do código");