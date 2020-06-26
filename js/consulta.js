function existeArmazenado(key) {
    if (localStorage.getItem(key) == null) {
        r = false;
    } else {
        r = true;
    }

    return r;
}

function escreverLista() {
    let lista = document.getElementById('lista');
    let modais = document.getElementById('modais');
    let inHTMLlista = '';
    let inHTMLmodais = '';
    let dados = getAll();

    for (i = 0; i < dados.produtos.length; i++) {
        inHTMLlista += `<div class="card shadow rounded mb-3">
          <div class="card-body">
              <div class="row">
                  <div class="col-2 text-center my-auto">
                      <div class="h5">
                          <b id="">
                              ${dados.produtos[i].codigo}
                          </b>
                      </div>
                  </div>
                  <div class="col-7 border-left border-right">
                      <div class="h4">
                          <p id="">
                          ${dados.produtos[i].descricao}
                          </p>
                      </div>
                  </div>
                  <div class="col-3">
                      <div class="row">
                          <div class="col-6 " id="">Qtd.: ${dados.produtos[i].quantidade}</div>
                          <div class="col-6" id="">Preço: ${dados.produtos[i].valor}</div>
                          
                      </div>
                      <div class="row"> 
                        <div class="col-12" id="">Categoria: ${dados.produtos[i].categoria}</div>
                      </div>
                      <div class="row">
                          <div class="col-12 text-center">
                              <a href="#" class="text-decoration-none badge badge-primary" data-toggle="modal"
                              data-target="#modal${dados.produtos[i].codigo}">
                                  + Detalhes
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;

        inHTMLmodais += `<!-- Modal -->
      <div class="modal fade" id="modal${dados.produtos[i].codigo}" tabindex="-1" role="dialog"
          aria-labelledby="modal${dados.produtos[i].codigo}" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="modal${dados.produtos[i].codigo}">
                        ${dados.produtos[i].codigo} - ${dados.produtos[i].descricao}
                      </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" >&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <div class="row">
                          <div class="col-7">
                              <p>
                                  <b>Código: </b> <a id="">${dados.produtos[i].codigo}</a> <br>
                                  <b>Descrição: </b> <p id="">${dados.produtos[i].descricao}</p>
                              </p>
                          </div>
                          <div class="col-5">
                              <p>
                                  <b>Categoria: </b><a id="">${dados.produtos[i].categoria}</a> <br>
                                  <b>Quantidade: </b><a id="">${dados.produtos[i].quantidade}</a> <br>
                                  <b>Valor: </b><a id="">${dados.produtos[i].valor}</a> <br>
                                  <b>Armazém: </b><a id="">${dados.produtos[i].armazem}</a> <br>
                                  <b>Estante: </b><a id="">${dados.produtos[i].estante}</a> <br>
                                  <b>Prateleira: </b><a id="">${dados.produtos[i].prateleira}</a> <br>
                                  <b>Posição: </b><a id="">${dados.produtos[i].posicao}</a> <br>
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                      <button type="button" class="btn btn-primary">Adicionar na Lista de Reembastecimento</button>
                  </div>
              </div>
          </div>
      </div>`;
    }

    lista.innerHTML = inHTMLlista;
    modais.innerHTML = inHTMLmodais;

}

function getAll() {
    return JSON.parse(localStorage.getItem('db'));
}

function getDadosByCod(cod) {
    let db = JSON.parse(localStorage.getItem('db'));
    let dados = '';
    for (i = 0; i < db.produtos.length; i++) {
        if (db.produtos[i].codigo == cod) {
            dados = db.produtos[i];
        }
    }
    return dados;
}

function getDadosByDesc(desc) {
    let db = JSON.parse(localStorage.getItem('db'));
    let dados = '';
    for (i = 0; i < db.produtos.length; i++) {
        if (db.produtos[i].descricao == desc) {
            dados = db.produtos[i];
        }
    }

    return dados;
}

function escreveConsulta(d) {
    let lista = document.getElementById('lista');
    let modais = document.getElementById('modais');
    let inHTMLlista;
    let inHTMLmodais;


    inHTMLlista = `<div class="card shadow rounded mb-3">
          <div class="card-body">
              <div class="row">
                  <div class="col-2 text-center my-auto">
                      <div class="h5">
                          <b id="">
                              ${d['codigo']}
                          </b>
                      </div>
                  </div>
                  <div class="col-7 border-left border-right">
                      <div class="h4">
                          <p id="">
                          ${d['descricao']}
                          </p>
                      </div>
                  </div>
                  <div class="col-3">
                      <div class="row">
                          <div class="col-6 " id="">Qtd.: ${d['quantidade']}</div>
                          <div class="col-6" id="">Preço: ${d['valor']}</div>
                          
                      </div>
                      <div class="row"> 
                        <div class="col-12" id="">Categoria: ${d['categoria']}</div>
                      </div>
                      <div class="row">
                          <div class="col-12 text-center">
                              <a href="#" class="text-decoration-none badge badge-primary" data-toggle="modal"
                              data-target="#modal${d['codigo']}">
                                  + Detalhes
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;

    inHTMLmodais = `<!-- Modal -->
                        <div class="modal fade" id="modal${d['codigo']}" tabindex="-1" role="dialog"
                            aria-labelledby="modal${d['codigo']}" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modal${d['codigo']}">
                                            ${d['codigo']} - ${d['descricao']}
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" >&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-7">
                                                <p>
                                                    <b>Código: </b> <a id="">${d['codigo']}</a> <br>
                                                    <b>Descrição: </b> <p id="">${d['descricao']}</p>
                                                </p>
                                            </div>
                                            <div class="col-5">
                                                <p>
                                                    <b>Categoria: </b><a id="">${d['categoria']}</a> <br>
                                                    <b>Quantidade: </b><a id="">${d['quantidade']}</a> <br>
                                                    <b>Valor: </b><a id="">${d['valor']}</a> <br>
                                                    <b>Armazém: </b><a id="">${d['armazem']}</a> <br>
                                                    <b>Estante: </b><a id="">${d['estante']}</a> <br>
                                                    <b>Prateleira: </b><a id="">${d['prateleira']}</a> <br>
                                                    <b>Posição: </b><a id="">${d['posicao']}</a> <br>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                        <button type="button" class="btn btn-primary">Adicionar na Lista de Reembastecimento</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;

    lista.innerHTML = inHTMLlista;
    modais.innerHTML = inHTMLmodais;

}

function consultar() {
    let consulta = document.getElementById('consulta').value;
    let esp = document.getElementById('pesquisa').value;

    if (esp == "descricao") {
        d = getDadosByDesc(consulta);
    } else {
        d = getDadosByCod(consulta);
    }
    
    console.log(typeof(d));
    if(d == ''){
        let lista = document.getElementById('lista');
        let strError = `<div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 h4">
                                        Ops, ocorreu um erro :(. Verifique se está pesquisando pela coisa certa. <br>
                                            Se estiver, o produto não está cadastrado. Cadastre-o clicando <a href="../../html/inclusao em estoque/inclusao.html"> aqui </a>. 
                                    </div>
                                </div>
                            </div>
                        </div>`;

        lista.innerHTML = strError;
    }else{
        escreveConsulta(d);
    }
}

if (existeArmazenado('db')) {
    escreverLista();
    document.getElementById('btnConsultar').addEventListener('click', consultar);
} else {
    let lista = document.getElementById('lista');
    let strError = `<div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 h4">
                                    Não produtos cadastrados :( Cadastre clicando <a href="../../html/inclusao em estoque/inclusao.html"> aqui </a>. 
                                </div>
                            </div>
                        </div>
                    </div>`;

    lista.innerHTML = strError;
}