fetch('kummatkin.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('tiedot-tähän').innerText = text
    })
    .catch(error => console.error('error error textiä ei tullu',error))