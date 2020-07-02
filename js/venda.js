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
  }
  console.log(dados);
  imprimeTabela(dados);
}


function imprimeTabela(dados) {
  let tabela = document.querySelector('#corpoTabela');
  let strHtml = '';
  console.log('dados.lenght = ' + dados.length);
  for (i = 0; i < dados.length; i++) {
    let obj = dados[i];
    console.log("objeto = ");
    console.log(obj);
    strHtml += `
      <tr id="linha${i}" onclick="preencherBox(${i})">
        <td id="cod${i}" scope="row">${dados[i].codigo}</td>
        <td id="des${i}">${dados[i].descricao}</td>
        <td id="qtd${i}">${dados[i].quantidade}</td>
        <td id="val${i}">${dados[i].valor}</td>
        <td            >${dados[i].categoria}</td>
        <td            >${dados[i].armazem}</td>
        <td            >${dados[i].estante}</td>
        <td            >${dados[i].prateleira}</td>
        <td            >${dados[i].posicao}</td>
      </tr>
      `
  }
  tabela.innerHTML = strHtml;
}


function preencherBox(n) {
  console.log(n);
  let box = document.querySelector('.box_descricao');
  let cod = document.querySelector(`#cod${n}`).innerHTML;
  let des = document.querySelector(`#des${n}`).innerHTML;
  let qtd = document.querySelector(`#qtd${n}`).innerHTML;
  let val = document.querySelector(`#val${n}`).innerHTML;

  let novoBox = `
    <img src="https://picsum.photos/200" alt="foto-produto" id="foto-produto">
    <span id="valor"><strong>Valor: </strong>${val}</span>
    <span id="descricao"><strong>Descrição: </strong>${des}</span>
    <span id="codigo"><strong>Código: </strong>${cod}</span>
    <div class="quantidade">
      <strong>Quantidade: <br></strong>
      <input id="quantidade" value="1">
      <button onclick="acr(1)"  id="mais">+</button>
      <button onclick="acr(-1)" id="menos">-</button>
    </div>
    <button class="btn btn-success confirma" id="confirma"><i class="fas fa-check"></i></button>
    <button class="btn btn-secondary cancela" id="cancela"><i class="fas fa-times"></i></button>
  `;
  box.innerHTML = novoBox;
}


function acr(n) {
  let campo = document.querySelector('#quantidade').value;
  campo = +campo + n;
  document.querySelector('#quantidade').outerHTML = `
    <input id="quantidade" value="${campo}">
  `;
}


/*
function vender(n) {
  let db = JSON.parse(localStorage.getItem(`${CNPJdaEmpresa}`));
  
  let des = document.querySelector(`#descricao`).innerHTML;
  let cod = document.querySelector(`#codigo`).innerHTML;

  let dados = [];
  let pesq = document.querySelector('#campo_pesquisa').value;
  for (i = 0; i < db.produtos.length; i++) {
      if (db.produtos[i].descricao.includes(pesq)) {
          dados.push(db.produtos[i]);
        }
  }
}
*/

console.log("fim do código");