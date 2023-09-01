function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    const img = document.querySelector('#profile img')
    
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.alt = "Foto de Mayk com óculos de sol bla bla bla"
    } else {
        img.setAttribute('src', './assets/avatar-dark.png')
        img.alt = "Foto de Mayk com óculos de grau bla bla bla"
    }
}