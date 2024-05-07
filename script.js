const rightLand = document.querySelector('.right-land')
const leftLand = document.querySelector('.left-land')
const container = document.querySelector('.img-container')
const imgContainer = document.querySelector('.img-container-2')
const parallax = document.querySelectorAll('.parallax')
const moon = document.querySelector('.moon')
const lands = document.querySelectorAll('.land')

window.setTimeout(() =>{
    rightLand.classList.remove('right-land')
    leftLand.classList.remove('left-land')
    rightLand.style.right = '-50px'
    leftLand.style.left = '-50px'
    rightLand.style.bottom = '0px'
    leftLand.style.bottom = '0px'
}, 4000)

function scroll(){
    rightLand.className = "land"
    leftLand.className = "land"

    const y = container.scrollTop;
    const move = -1 *y*0.5
    const transY = -20 - move*0.7
    
    moon.style.transform = `translate(33%,${transY >= 30 ? 30 : transY}%)`

    rightLand.style.right = `${move > -50 ? -50: move}px`
    leftLand.style.left = `${move > -50 ? -50: move}px`
    lands.forEach(land => land.style.transform = `translateY(-15%) scaleX(1.5) scaleY(1.5)`)
    
}

container.addEventListener('scroll', scroll)

function move(e){
    const x = e.clientX - innerWidth/2;
    const y = e.clientY - innerHeight/2;

    parallax.forEach(p =>{
        const speedX = p.dataset.speedx
        const speedY = p.dataset.speedy
        p.classList.contains('moon') ? p.style.transform = `translate(calc(33% - ${x *speedX}px), calc(-20% - ${y *speedY}px))` : 
        p.style.transform = `translate(calc(0% - ${x *speedX}px), calc(0% - ${y *speedY}px))`
        if(p.classList.contains('left-castle')) p.style.transform = `translate(calc(-5% - ${x *speedX}px), calc(10% - ${y *speedY}px))`
        if(p.classList.contains('land')) p.style.transform = `translate(calc(0% - ${x *speedX}px), calc(-15% - ${y *speedY}px)) scaleX(1.5) scaleY(1.5)`
    } )
}

imgContainer.addEventListener('mousemove', (e) => move(e))