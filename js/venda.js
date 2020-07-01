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
  let dados = '';
  let pesq = document.querySelector('#campo_pesquisa').value;
  for (i = 0; i < db.produtos.length; i++) {
      if (db.produtos[i].descricao.includes(pesq)) {
          dados = push(db.produtos[i]);
          console.log(dados);


      }
      else {
        console.log('não achou nada');
      }
  }
  imprimeDados();
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


console.log("fim do código");