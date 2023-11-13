import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationOpen: boolean = false;
  isSkillsOpen: boolean = false;
  
  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Mahmoud Doma - Resume')
  }

  DownloadFile(){
    const link = this.renderer.createElement('a')
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Mahmoud_Doma_CV.pdf.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }

  DownloadFileCertification(){
    const link = this.renderer.createElement('a')
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Certification.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }
}
