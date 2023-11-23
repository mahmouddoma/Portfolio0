import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { project } from '../_models/project';
import { Swiper } from 'swiper';
let mySwiper;


@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
})


export class ProjectModalComponent {
  project = {} as project;
  picture: any;
  activeSlideIndex: number = 0;

  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.project.pictures.length) % this.project.pictures.length;
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.project.pictures.length;
  }
  constructor(public bsModalRef: BsModalRef){}
}

