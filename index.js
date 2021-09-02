function codifica() {
    var tipo = document.getElementById('cifras-escolha').value;
    console.log(tipo);
    if (tipo == 'base64') {
        formBase64();
    } else {
        cifraCesar();
    }
}

function cifraCesar() {
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letra = document.getElementById('code-message').value.toUpperCase();
    var resultado = '';

    for (var i = 0; i < letra.length; i++) {
        var incremento = document.getElementById('incremento').value;
        var incrementoNumero = Number(incremento)
        var posicaoDaLetraNoAlfabeto = letra.charCodeAt(i) - 64;
        console.log(posicaoDaLetraNoAlfabeto)

        var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + incrementoNumero) % 26;
        resultado += alfabeto[letraComDeslocamento - 1];
        document.getElementById('decode-message').innerHTML = resultado;
    } 
}

function formBase64() {
    var decodiCodi = document.getElementById('cifras-escolha').value;
    var entrada = document.getElementById('code-message').value;
    var saida = document.getElementById('decode-message');
    console.log(decodiCodi.value)

    if (decodiCodi == 'key','key1') {
        saida.innerHTML = btoa(entrada);
    }
    else {
        saida.innerHTML = atob(entrada);
    }
}