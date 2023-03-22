import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(section: string) {
    const $element = document.getElementById(section);
    $element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
