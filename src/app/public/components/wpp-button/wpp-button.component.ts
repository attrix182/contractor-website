import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wpp-button',
  templateUrl: './wpp-button.component.html',
  styleUrls: ['./wpp-button.component.scss']
})
export class WppButtonComponent implements OnInit {

  @Input() link!:string;


  ngOnInit(): void {
    this.link = 'https://wa.me/11?text=Hola'
  }


}
