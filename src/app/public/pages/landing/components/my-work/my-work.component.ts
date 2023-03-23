import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  @ViewChild('detailModal', { read: TemplateRef })
  public detailModal!: TemplateRef<any>;

  constructor(private modalSvc: NgbModal,config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 7000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}


  ngOnInit(): void {}

  openDetail() {
    let data = 'test';
    this.modalSvc.open(this.detailModal, { size: 'xl' });
  }
}
