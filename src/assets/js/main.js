/*=============== SCROLL REVEAL ANIMATION ===============*/

setTimeout(() => {
    const sr=   ScrollReveal({
        origin: 'top',
        distance:'60px',
        duration:2500,
        delay: 400
    })
    sr.reveal(`.home__data , .home__social , .contact__container , .footer__container`);
    sr.reveal(`.home__image `,{origin: 'bottom'});
    sr.reveal(`.about__data,.skills__data `,{origin:'left'});
    sr.reveal(`.about__image, .skills__content `,{origin: 'right'});
    sr.reveal(`.services__card, .projects__card `,{interval:100});
}, 200);
