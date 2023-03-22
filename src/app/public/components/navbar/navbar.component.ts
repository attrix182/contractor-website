import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(section:string){
    const $element = document.getElementById(section)
    $element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
