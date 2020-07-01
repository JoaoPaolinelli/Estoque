window.onload = () => {
    var dados = JSON.parse(localStorage.getItem('dados'));

    var username = dados.username;
    var empresa = dados.empresa;
    var taxa = dados.taxa;

    console.log(username);
    console.log(empresa);
    console.log(taxa);

    document.getElementById('username').innerHTML = `<i class="far fa-user"></i> ${username}`;
    document.getElementById('empresa').innerHTML = `<i class="fas fa-briefcase"></i> ${empresa}`;
    document.getElementById('taxa').innerHTML = `<i class="fas fa-percent"></i> ${taxa}`;


}

