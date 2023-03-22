import { Location } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showBrand = false;
  @ViewChild('nav') navbar!: any;

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    let url = this.location.path().split('#')[1];
    this.scrollToElement(url);
  }

  scrollToElement(section: string) {
    window.location.href = `#${section}`;
    if (section == 'services') {
      this.navbar.nativeElement.classList.add('secondary');
    } else if (section == 'home') {
      this.navbar.nativeElement.classList.remove('secondary');
    } else if (section == 'work') {
      this.navbar.nativeElement.classList.remove('secondary');
      this.navbar.nativeElement.classList.add('primary');
    }

    const $element = document.getElementById(section);
    $element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  @HostListener('window:scroll', []) changeNabvar() {
    let clientPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let heightHeader = document.getElementById('home')?.offsetHeight || 0;
    let heightServices = document.getElementById('services')?.offsetHeight || 0;
    let heightWork = document.getElementById('work')?.offsetHeight || 0;
    let heightContact = document.getElementById('contact')?.offsetHeight || 0;

    if (clientPosition > heightHeader) {
      document.getElementById('navbar')?.classList.add('navbar-fixed');
      this.showBrand = true;
    } else {
      document.getElementById('navbar')?.classList.remove('navbar-fixed');
      this.showBrand = false;
    }
  }
}
