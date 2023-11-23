import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import Swiper from 'swiper';
import { project } from '../_models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit, AfterViewInit {
  @Input() project = {} as project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }
  ngOnInit() { }  
  ngAfterViewInit() {}

  OpenProjectModal() {
    const initialState = {
      class: 'modal-lg',
      initialState: {
        project: this.project
      },
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent,  initialState );
  }
}
