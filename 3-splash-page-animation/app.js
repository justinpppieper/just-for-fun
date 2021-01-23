const tl = gsap.timeline({ default: { ease: 'power1.out'} })

tl.to('span', {y:'0', duration: 1, stagger: 2}) // stagger: let each line shows one by one
tl.to('.slider', {y: '-100%', duration: 5, delay: 1})
tl.to('.splash', {y: '-100%', duration: 1}, '-=3.5')
tl.fromTo('nav', {opacity: 0}, {opacity:1, duration: 1.5}, '-=1')
tl.fromTo('.banner', {opacity: 0}, {opacity:1, duration: 1.5}, '-=1.5')

