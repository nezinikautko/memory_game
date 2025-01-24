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