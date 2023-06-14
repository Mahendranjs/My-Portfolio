import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import * as ScrollReveal from 'scrollreveal'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }
  ngOnInit() {

    const blurHeader = () => {
      const header = document.getElementById('header')
      window.scrollY >= 50 ? header?.classList.add('blur__header') : header?.classList.remove('blur__header')
    }

    window.addEventListener('scroll', blurHeader)

    const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up')
      // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
      window.scrollY >= 350 ? scrollUp?.classList.add('show-scroll') : scrollUp?.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)


    const scrollActive = () => {
      const scrollY = window.pageYOffset
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((current: any) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionsClass?.classList.add('active-link')
        } else {
          sectionsClass?.classList.remove('active-link')
        }
      })
    }
    window.addEventListener('scroll', scrollActive)

  //   ScrollReveal().reveal(`.home__data , .home__social`, {
  //     origin: 'top',
  //     distance:'60px',
  //     duration:2500,
  //     delay: 400
  // });

    var slideUp = {
      origin: 'top',
      distance:'60px',
      duration:2500,
      delay: 400
  };
  }
    


  title = 'Portfolio';

  toggle() {
    const navMenu = document.getElementById('nav-menu')
    navMenu?.classList.add('show-menu')
  }

  close() {
    const navMenu = document.getElementById('nav-menu')
    navMenu?.classList.remove('show-menu')
  }

  contactmessage: string = '';
  sendEmail(e: Event) {
    e.preventDefault();
    let formValue = document.getElementById('contact-form') as HTMLFormElement
    emailjs.sendForm('service_h7ecr63', 'template_fx4ms4c', e.target as HTMLFormElement, '0VQNjnhMuySmq6RuR')
      .then(() => {
        this.contactmessage = 'Message Sent Successfully';
        console.log('SUCCESS!');
        setTimeout(() => {
          this.contactmessage = ''
        }, 5000);
        formValue?.reset();
      }, (error) => {
        this.contactmessage = 'Message not sent'
        console.log('FAILED...', error);
        setTimeout(() => {
          this.contactmessage = ''
        }, 5000);
      });
  }

  // ngAfterViewInit(){
  //   ScrollReveal({
  //     origin: 'top',
  //     distance:'60px',
  //     duration:2500,
  //     delay: 400
  //   }).reveal(`.home__data , ."home__social`)
  // }

}
