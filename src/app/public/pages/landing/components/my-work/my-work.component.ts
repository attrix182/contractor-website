import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  @ViewChild('detailModal', { read: TemplateRef })
  public detailModal!: TemplateRef<any>;

  constructor(private modalSvc: NgbModal) {}

  ngOnInit(): void {}

  openDetail() {
    let data = 'test';
    this.modalSvc.open(this.detailModal, { size: 'xl' });
  }
}
