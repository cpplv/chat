//console.log(1)
function sutitZinu()
{
    console.log('sutitzinu() darbojas');
    let zina = document.querySelector('.manaZina');
    let zinas = document.querySelector('.chataZinas');

    zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value;
}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt');
    let dati = await datiNoServera.text();
    console.log(dati);
    zinas.innerHTML = dati;
}

