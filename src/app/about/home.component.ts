import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeSlideIndex: number = 0;

  showPartialText: boolean = true;

  toggleText() {
    this.showPartialText = !this.showPartialText;
  }


  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.featuredProject.pictures.length) % this.featuredProject.pictures.length;
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.featuredProject.pictures.length;
  }
  featuredProject = {} as project;
  project: any;

  constructor(private titleService: Title,private projectService: ProjectsService){
    this.titleService.setTitle('Mahmoud Doma - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }
}
