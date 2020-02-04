const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

let cont = 0
for(let card of cards){
    const id_card = card.getAttribute("id")
    card.addEventListener("click", function(){
       modalOverlay.classList.add('active')
       modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${id_card}`

    })
}

// Fechando pelo X
document.querySelector('.close_modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src=''
})

// Fechando atraves de um click fora da janela aberta
modalOverlay.addEventListener('click', function(event) {
    if(event.target === modalOverlay) {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src=''
    }
})

// Maximizando
document.querySelector('.maximize_modal').addEventListener('click', function(){
    
  if(cont==0){
      modal.classList.add('fullscreen')
      cont++
  }
  else{
      modal.classList.remove('fullscreen')
      cont = 0
  }  
})
