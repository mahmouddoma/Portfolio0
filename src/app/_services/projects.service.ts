import { Injectable } from '@angular/core';
import { project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: project[] = [
    {
      id: 0,
      name: 'Angular App',
      pictures: [
        'assets/WhatsApp Image 2023-10-28 at 21.53.31_6dfab6cd.jpg',
        'assets/WhatsApp Image 2023-10-28 at 21.54.09_932deef4.jpg',
        'assets/WhatsApp Image 2023-10-28 at 21.54.49_498768ee.jpg',
      ],
      projectLink: 'https://mahmouddoma.github.io/recipeApp/recipes',
      summary:
        'A recipe app is a digital application designed to assist users in finding, storing, and preparing various culinary recipes. ',
      description:
        "Discover a World of Flavors: Whether you're a novice cook or an experienced chef, our recipe app is your gateway to a world of culinary delights. Explore a vast library of recipes spanning diverse cuisines, dietary preferences, and skill levels. From quick and easy weeknight meals to gourmet dishes for special occasions, our app has something for every taste and occasion.",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML,Tag.CSS],
    },
    {
      id: 1,
      name: 'Simple task for service in Angular ',
      pictures: [
        'assets/Screenshot 2023-10-29 074553.png',
        'assets/Screenshot 2023-10-29 074553.png',
        'assets/Screenshot 2023-10-29 074553.png'
      ],
      projectLink: 'https://mahmouddoma.github.io/service-app/',
      summary: 'Simple app to add a new service',
      description:
        'A simple Angular service app is an application created using the Angular framework that employs a basic service to share data and functionality across different parts of the application, primarily its components. This type of application is useful for understanding how to create and use services in Angular.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.JAVASCRIPT, Tag.CSS],
    },
    {
      id: 2,
      name: 'Prixima',
      pictures: [
        'assets/prixima00.png',
        'assets/prixima01.png',
        'assets/prixima02.png',
      ],
      projectLink: ' https://mahmouddoma.github.io/Prixima-prohect/',
      summary: 'Front-End web page developed using HTML, CSS and JavaScript',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT],
    },
    {
      id: 3,
      name: 'Web Angualr Form',
      pictures: [
        'assets/form.png',
        'assets/form.png',
        'assets/form.png',
      ],
      projectLink: 'https://mahmouddoma.github.io/formTd/',
      summary: 'Simple Web form using Angular forms ',
      description:
        'In summary, Angular forms are a key feature that allows developers to collect and manage user input in Angular applications.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT,Tag.HTML, Tag.CSS],
    },
    {
      id: 4,
      name: 'To DO List',
      pictures: [
        'assets/Todo.png',
        'assets/Todo.png',
        'assets/Todo.png',
      ],
      projectLink: 'https://mahmouddoma.github.io/Todo-App/',
      summary:
        'To Do List using Firebase, API',
      description:
      'To Do App with Firebase and API',
      tags: [Tag.TYPESCRIPT,Tag.HTML,Tag.CSS],
    }
  ];
  constructor() { }
  
  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError("There is project that matches the id: " + id);
    }
    return project
  }

  GetProjectByFilter(filterTags: Tag[]) {
    let filteredProjects: project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });
      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
