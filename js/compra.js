window.onload = () => {
    mostrarSalvos();

    document.querySelector("#btnRegistrar").addEventListener("click", (e) => {
        e.preventDefault();
        salvarCompra();
    });
}

function mostrarSalvos() {
    let tabela = document.querySelector("#corpoTabela");
    let compras = JSON.parse(localStorage.getItem("compras"));
    compras = compras.compras;
    let html = "";

    if (hasCompras() && !compraIsEmpty()) {
        console.log("A");
        for (i = 0; i < compras.length; i++) {
            html += `
                <tr>
                    <td>${compras[i].cod}</td>
                    <td>${compras[i].descricao}</td>
                    <td>${compras[i].fornecedor}</td>
                    <td>${compras[i].categoria}</td>
                    <td>${compras[i].quantidade}</td>
                    <td>${compras[i].valor}</td>
                    <td>${compras[i].data}</td>
                    <th><i class="fas fa-check text-success " id="${compras[i].cod}"-check></i></th>
                    <th><i class="fas fa-times text-danger" id="${compras[i].cod}-close"></i></th>
                </tr>
                `;
            console.log(compras[i]);
        }

        tabela.innerHTML = html;

        for (i = 0; i < compras.length; i++) {
            let valor = compras[i];
            let checkV = `${valor}-check`;
            let closeV = `${valor}-close`;
            /* document.getElementById(checkV).addEventListener("click", function () {
                confirmarCompra(valor);
            });
            document.getElementById(closeV).addEventListener("click", function () {
                deletarCompra(valor);
            }); */
        }
    } else {
        html = `
            <tr>
                <td colspan="9">
                    <h3>Não há compras sendo processadas.</h3>
                </td>
            </tr>
            `;
        tabela.innerHTML = html;
    }

}

function salvarCompra() {
    if (hasCompras()) {
        if (isAllFilled()) {
            //let query = document.querySelector("#codigo").value;
            let compras = leCompras();
            compras = addCompra(compras);
            localStorage.setItem("compras", JSON.stringify(compras));
        } else {
            alert("Preencha todas os campos.");
        }
    } else {
        let value = {
            "compras": []
        };
        localStorage.setItem("compras", JSON.stringify(value));
        mostrarSalvos();
    }
}

function addCompra(compras) {
    let descricao = document.querySelector("#descricao").value;
    let codigo = document.querySelector("#codigo").value;
    let categoria = document.querySelector("#categoria").value;
    let quantidade = document.querySelector("#quantidade").value;
    let valor = document.querySelector("#valor").value;
    let data = document.querySelector("#data").value;
    let fornecedor = document.querySelector("#fornecedores").value;
    let novo = {
        cod: codigo, //TEMPORARIO
        descricao: descricao,
        categoria: categoria,
        quantidade: quantidade,
        valor: valor,
        data: data,
        fornecedor: fornecedor
    };

    compras.compras.push(novo);
    return compras;
}

function deletarCompra(){

}

function confirmarCompra(){

}

function hasCompras() {
    has = true;
    obj = JSON.parse(localStorage.getItem("compras"));
    if (localStorage.getItem("compras") === null) {
        has = false;
    }
    return has;
}

function compraIsEmpty() {
    has = false;
    obj = JSON.parse(localStorage.getItem("compras"));
    if (obj.compras.length == 0) {
        has = true;
    }
    return has;
}

function leCompras() {
    let compras = JSON.parse(localStorage.getItem("compras"));
    return compras;
}

// checa se todos os campos foram preenchidos
function isAllFilled() {
    if (isEmpty('descricao') || isEmpty('codigo') || isEmpty('categoria') || isEmpty('quantidade') || isEmpty(
            'valor') || isEmpty('data') || isEmpty('fornecedores')) {
        return false;
    } else {
        return true;
    }
}

// checa se o campo está vazio
function isEmpty(item) {
    if (document.getElementById(item).value == undefined || document.getElementById(item).value == "" ||
        document.getElementById(item).length == 0) {
        return true;
    } else {
        return false;
    }
}