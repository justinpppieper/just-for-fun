const cardContainer = document.querySelectorAll('.card-container')
const card = document.querySelectorAll('.card')
const avatar = document.querySelectorAll('.avatar img')
const axis = window.innerWidth / 8
const xAxis = window.innerHeight / 2

for(let i = 0; i < cardContainer.length; i ++) {
    cardContainer[i].addEventListener('mousemove', e => {
        let yAxis = axis * (i * 2 + 1)
        // let xRotate = (xAxis - e.pageY) / 25
        let yRotate = (yAxis - e.pageX) / 25
        // console.log(yAxis, e.pageX, yRotate);
        // console.log(xAxis, e.pageY, xRotate);
        card[i].style.transform = `rotateY(${yRotate}deg)`
    
    })
}

for (let i = 0; i < cardContainer.length; i++) {
    cardContainer[i].addEventListener('mouseenter', e => {
        card[i].style.transition = 'none'
        avatar[i].style.transform = "rotateZ(30deg)"
        // avatar[i].style.transform = "translateZ(75px)"

    })
}

for (let i = 0; i < cardContainer.length; i++) {
    cardContainer[i].addEventListener('mouseleave', e => {
        card[i].style.transition = 'all 0.5s ease'
        card[i].style.transform = 'rotateY(0deg)'
        avatar[i].style.transform = 'rotateZ(0deg)'
    })
}
