const name = document.getElementById('name')
var errorElement1 = document.getElementById('error1')

const email = document.getElementById('email')
var errorElement2 = document.getElementById('error2')

const tiket = document.getElementById('tiket')
var errorElement3 = document.getElementById('error3')

var form = document.getElementById('form')


//Nama Pelanggan
form.addEventListener('submit', (e) => {
    var x, text;
    x = document.getElementById("name").value;
    
    if (name.value.length >=0) {
        text = "";
    }
    
    if (name.value === '' || name.value == null) {
        text = "Nama belum diisi";
    }

    if (name.value.length >=31) {
        text = "Maksimum 30 karakter";
    }

    document.getElementById('error1').innerHTML = text;
})

//Pesan Email
form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('Email belum diisi')
    }
    if (name.value.length >=0) {
        messages.push('')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement2.innerText = messages
    }
})

//Pesan Tiket
form.addEventListener('submit', (e) => {
    var x, text;
    x = document.getElementById("tiket").value;
    
    if (isNaN(x) || x < 1 || x > 10){
        text = "Isian jumlah antara 1-10";
    }
    else {
        text = "";
    }
    document.getElementById('error3').innerHTML = text;
})



