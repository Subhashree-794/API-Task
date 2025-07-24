//create multiple stars dynamically

function createStars() {
    const noofstars = 100
    for (let i = 0; i < noofstars; i++) {
        const star = document.createElement('div')
        star.classList.add('star')
        //random size
        const size = Math.random() * 3 + 1
        star.style.width = `${size}px`
        star.style.height = `${size}px`
        star.style.left =`${Math.random() * 100}vw`
        star.style.top = `${Math.random() * 100}vh`
    
        //random speed of twinkling
        star.style.animationDuration = `${Math.random() * 2 + 1}s`
        document.body.appendChild(star)
   }
}

createStars()