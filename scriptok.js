let start_btn = document.querySelector(".start_btn")
let game_board = document.querySelector(".game_board")

start_btn.addEventListener("click", function(){
    game_board.style.display = "grid";
    anime({
        targets: '.start_btn',
        duration: 1000,
        translateX: '1150px',
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
    faceup.classList.add("faceup")
    
    let facedown = document.createElement("div")
    facedown.classList.add("facedown")
    facedown.style.backgroundImage = `url(${img})`

    card.appendChild(faceup)
    card.appendChild(facedown)
    game_board.appendChild(card)
})

let flipped_cards = []
let pairs = 0

game_board.addEventListener("click", (event) => {
    
    let clicked_cards = event.target.closest(".card")
    
    if(
        !clicked_cards || flipped_cards.includes(clicked_cards) || clicked_cards.classList.contains("pairs_found")
    )return
        clicked_cards.classList.add("flipped")
        flipped_cards.push(clicked_cards)
        console.log(flipped_cards)
    
    if(flipped_cards.length === 2){
        let [firstCard, secondCard] = flipped_cards
        let first_image = firstCard.querySelector(".facedown").style.backgroundImage
        let second_image = secondCard.querySelector(".facedown").style.backgroundImage

        if(first_image === second_image){
            firstCard.classList.add("pairs_found")
            secondCard.classList.add("pairs_found")
            //atrasto kartinju iznemšana animacija
            anime({
                targets: [firstCard, secondCard],
                scale: [1, 0],
                duration: 1000,
                easing: 'linear',
                complete: () => {
                    firstCard.querySelector(".facedown").style.backgroundImage = "none"
                    secondCard.querySelector(".facedown").style.backgroundImage = "none"
                    pairs += 2

                    if (pairs === images_2.length){
                        alert("ЗАКОНЧИЛАСЬ ЖЫЗНЬ!")
                        window.location.reload()
                    }
                }
            })
        }else{
            setTimeout(() => {
                firstCard.classList.remove("flipped")               
                secondCard.classList.remove("flipped")   
            }, 400)
        }
        flipped_cards = []
    }
})