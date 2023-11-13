import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as project[];
  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular : boolean = false;
  html : boolean = false;
  css : boolean = false;
  scss : boolean = false;
  javascript : boolean = false;
  git : boolean = false;
  github : boolean = false;
  bootstrap: boolean = false;
  filtering: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Mahmoud Doma - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR)
    }
    if (this.html) {
      filterTags.push(Tag.HTML)
    }
    if (this.css) {
      filterTags.push(Tag.CSS)
    }
    if (this.bootstrap) {
      filterTags.push(Tag.CSS)
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT)
    }
    if (this.scss) {
      filterTags.push(Tag.SCSS)
    }
    if (this.git) {
      filterTags.push(Tag.GIT)
    }
    if (this.angular || this.bootstrap || this.css || this.git || this.html || this.javascript || this.scss || this.typescript){
      this.filtering = true;
    } else {
      this.filtering = false;
    }
    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }
  
  RestFilters() {
    this.typescript = false;
    this.javascript = false;
    this.angular = false;
    this.html = false;
    this.css = false;
    this.scss = false;
    this.git = false;
    this.bootstrap = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
