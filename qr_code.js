//JavaScript (index.js)
function generer_code_qr() {
    const text = document.getElementById('text').value;
    const qrcodeContainer = document.getElementById('qrcode');
    const errorContainer = document.getElementById('error');
    const downloadButton = document.getElementById('download');

    qrcodeContainer.innerHTML = '';
    errorContainer.innerHTML = '';

    if (text.trim() === '') {
        errorContainer.innerHTML = 'Veuillez entrer une URL valide.';
        return;
    }

    const qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 256,
        height: 256,
    });

    downloadButton.style.display = 'block';
    downloadButton.onclick = function() {
        const img = qrcodeContainer.querySelector('img');
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'qrcode.png';
        link.click();
    };
}



/*function generer_code_qr() { 
    let contentInput = document.getElementById('text').value;
    let qrcodeEspace = document.getElementById('qrcode');
    if(contentInput) {
        //Effacer le QRCode existant
        document.getElementById("qrcode").innerHTML = ""

        //console.log(contentInput)
        //Genere moi le code QR
         new QRCode(qrcodeEspace,
            contentInput);
    }
    document.getElementById('download').style.display = "inline-block"
}

function download(){
    let img = document.querySelector('#qrcode img');
    if (img) {
        let lien = document.createElement('a');
        console.log(lien)
        lien.href = img.src;
        lien.download = 'qr-code-maker.png';
        document.body.appendChild(lien);
        lien.click();
    }
}*/
