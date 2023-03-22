import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollToElement(section: string) {
    const $element = document.getElementById(section);
    $element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  @HostListener('window:scroll', []) changeNabvar() {
    let clientPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let heightHeader = document.getElementById('home')?.offsetHeight || 0;

    if (clientPosition > heightHeader) {
      document.getElementById('navbar')?.classList.add('navbar-fixed');
    } else {
      document.getElementById('navbar')?.classList.remove('navbar-fixed');
    }
  }
}
