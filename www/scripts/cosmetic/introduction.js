/* LocalStorage? */
if (typeof (Storage) !== undefined) {
    /* Unemployed players */
    let loaded = localStorage.getItem('loaded')
    if (!loaded) {
        document.querySelector('#introduction').style.display = 'flex'
        loadRonaldoAnimations()
        localStorage.setItem('loaded', 'ok')
        document.querySelector('html').style.overflow = 'hidden'
        animateHome()
    }/*  else {
        animateHome(0.25, 0.2)
    } */
} else {
    loadRonaldoAnimations()
}

function loadRonaldoAnimations() {
    var introduction = gsap.timeline({ defaults: { duration: 3 } });

    /* Timeline */
    introduction.from('#introduction-image', { x: '-100vw', ease: "elastic.out(1, 0.3)" })
    introduction.add('unlockButton')
    introduction.to('#introduction-image', { duration: 1, scale: 0.7, rotation: -10, y: '-100', ease: "power3.out" }, 'unlockButton')
    introduction.to('#introduction-button', { duration: 0.5, opacity: 1, y: '-190', ease: "none" }, 'unlockButton')

    /* Button effect */
    const continueButton = document.querySelector('#introduction-button')

    continueButton.addEventListener('click', () => {
        introduction.timeScale(2);
        introduction.reverse();
        setInterval(() => {
            gsap.to('#introduction', { duration: 1, y: '-100vh', ease: "power2.out" })
            setInterval(() => { //Wait 1 second
                document.querySelector('body').style.overflow = 'auto'
                document.querySelector('#introduction').style.display = 'none'
            }, 1000)
        }, 2000)
    })
}

/* animar inicio */
function animateHome(duration = 0.1, delay = 0) {
    gsap.fromTo('#homeDiv', { y: 40 }, { display: 'block', y: 0, duration: duration, delay: delay });
}