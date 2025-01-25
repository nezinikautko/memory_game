let start_btn = document.querySelector(".start_btn")
let game_board = document.querySelector(".game_board")

start_btn.addEventListener("click", function(){
    game_board.style.display = "grid";
    anime({
        targets: '.start_btn',
        //translateY: '810px',
        duration: 1500,
        translateX: '810px',
        rotate:540,
        easing: 'linear'
    }).finished.then(function(){
       start_btn.style.display = 'none' 
    })
})

let images = [
    "./images/img_1.jpg", "./images/img_2.jpg", "./images/img_3.jpg",
    "./images/img_4.jpg", "./images/img_5.jpg", "./images/img_6.jpg",
    "./images/img_7.jpg", "./images/img_8.jpg", "./images/img_9.jpg",
    "./images/img_10.jpg", "./images/img_11.jpg", "./images/img_12.jpg",
    "./images/img_13.jpg", "./images/img_14.jpg", "./images/img_15.jpg",
]
let images_2 = [...images, ...images].sort(() => Math.random()-0.5)

images_2.forEach((img, i) =>{
    let card = document.createElement("div")
    card.classList.add("card")
    card.dataset.id = i
    
    let faceup = document.createElement("div")
    faceup.classList.add("face")
    
    let facedown = document.createElement("div")
    facedown.classList.add("down")
    facedown.style.backgroundImage = `url(${img})`

    card.appendChild(faceup)
    card.appendChild(facedown)
    game_board.appendChild(card)
})

let turned_cards = []
let pairs = 0

game_board.addEventListener("click", (event) => {
    let clicked_cards = event.target.closest(".card")
    console.log(clicked_cards)
})
