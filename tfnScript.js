var global;

function openNav() {
    document.getElementById('mySideNav').style.width = '15%';
    document.getElementById('main').style.marginLeft = '15%';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}


function closeNav() {
    document.getElementById('mySideNav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'White';
}

function sv() {
    sessionStorage.setItem("articleName", global);
}
