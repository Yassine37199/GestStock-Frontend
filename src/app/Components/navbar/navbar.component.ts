import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  
  navbar(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // toggle navbar
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      });
}

  

  constructor() { }

  ngOnInit(): void {
    this.navtoggle();

  }

  navtoggle(){
    this.navbar();
   
  }

}
