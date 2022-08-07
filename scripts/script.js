const textoParaCriptografar = document.getElementById('textoparacriptografar');
const textoParaDecodificar = document.getElementById('textoparadecodificar');
const textAreaResultado = document.getElementById('textarea-resultado');

function criptografar(textoParaCriptografar){

    textoParaCriptografar = textoParaCriptografar.value;
    let textoCodificado = textoParaCriptografar.split("");
    for(var i = 0; i <= textoCodificado.length; i++){
        if(textoCodificado[i] == "a"){
            textoCodificado[i] = "ai";
        }else if(textoCodificado[i] == "e"){
            textoCodificado[i] = "enter";
        }else if(textoCodificado[i] == "i"){
            textoCodificado[i] = "imes";
        }else if(textoCodificado[i] == "o"){
            textoCodificado[i] = "ober";
        }else if(textoCodificado[i] == "u"){
            textoCodificado[i] = "ufat";
        }
    }
    textoCodificado = textoCodificado.join("");
    textAreaResultado.value = textoCodificado;

    document.getElementById('imagemresultadovazio').style.display = 'none';
    document.getElementById('textarea-resultado').style.display = 'inline';
}

function decodificar(textoParaCriptografar){

    textoParaCriptografar = textoParaCriptografar.value;

    textoParaCriptografar = textoParaCriptografar.replace(/enter/g,"e");
    textoParaCriptografar = textoParaCriptografar.replace(/imes/g,"i");
    textoParaCriptografar = textoParaCriptografar.replace(/ai/g,"a");
    textoParaCriptografar = textoParaCriptografar.replace(/ober/g,"o");
    textoParaCriptografar = textoParaCriptografar.replace(/ufat/g,"u");
    
    textAreaResultado.value = textoParaCriptografar;

    document.getElementById('imagemresultadovazio').style.display = 'none';
    document.getElementById('textarea-resultado').style.display = 'inline';

}

function desabilitarBotaoCopiar() {
    if(
        (document.getElementById("textoparacriptografar").value==="")&&
        (document.getElementById("textarea-resultado").value==="")) { 
        document.getElementById('botaocopiar').disabled = true;
    } else { 
        document.getElementById('botaocopiar').disabled = false;
    }
}

function copyToClipBoard() {

    let textoCopiado = document.getElementById("textarea-resultado");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Texto Copiado: " + textoCopiado.value;

}

function limparResultado(){
    
    textAreaResultado.value = "";
    document.getElementById('imagemresultadovazio').style.display = 'inline';
    document.getElementById('textarea-resultado').style.display = 'none';

}

function outFunc() {

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiar para clipboard";

}