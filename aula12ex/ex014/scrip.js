function carregar() {
     var msg = window.document.getElementById('msg')
     var img = window.document.getElementById('imagem')
     var data =  new Date()
     var hora = data.getHours()
     msg.innerHTML = `Agora são ${hora} horas`
     if (hora >= 05 && hora < 12) {
          img.src = 'fotomanhan.png'
          document.body.style.background = '#e2cd9f'
     } else if (hora >= 12 && hora <= 18) {
          img.src = 'fototarde.png'
          document.body.style.backgroud = '#b9846f'
     } else if (hora>= 19 && hora <= 23) {
          img.src = 'fotonoite.png'
          document.body.style.background = '#515154'
     } else if (hora >=00 && hora <=04) {
          img.src = 'fotomadrugada.png'
          document.body.style.background = '#4a3834'
     }


}     