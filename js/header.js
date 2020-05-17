window.onload = () => {
    var dados = JSON.parse(localStorage.getItem('dados'));

    var username = dados.username;
    var empresa = dados.empresa;
    var taxa = dados.taxa;

    console.log(username);
    console.log(empresa);
    console.log(taxa);

    document.getElementById('username').innerHTML = username;
    document.getElementById('empresa').innerHTML = empresa;
    document.getElementById('taxa').innerHTML = taxa;


}