function togglemode() {
  const html = document.documentElement
/*
  if(html.classlist.contains('light')) {
    html.classList.remove('light')
  } else{
    html.classList.add('light')
  }
  */

  html.classList.toggle('light')

  //pegar a tag img

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  }
  else{
    img.setAttribute("src", "./assets/Avatar.png")
  }
  
  
  
  /*if (html.classlist.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }

  //substituir a imagem
  // se tiver light mode, adicionar imagem
  // se tiver sem light mode manter imagem*/

}