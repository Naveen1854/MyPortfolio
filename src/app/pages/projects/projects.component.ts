import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'HOSPITAL MANAGEMENT SYSTEM',
      image: './assets/images/HMS.webp',
      description:
        'Built a backend system managing patient, appointment doctor, prescription and billing modules and streamlined search operations using Spring Boot.',
      link: 'https://github.com/Naveen1854/JFS-Project',
    },
    {
      title: 'THEATRE MANAGEMENT SYSTEM',
      image: './assets/images/TMS.png',
      description:
        'Designed a Spring Boot backend application for managing theatre operations. Implemented REST APIs for movie scheduling and seat booking. Integrated MySQL database using Hibernate ORM.',
      link: 'https://github.com/Naveen1854/project',
    },
    {
      title: 'QR CODE GENERATOR',
      image: './assets/images/QR-code-generator.jpg',
      description:
        'A responsive web application that generates QR codes instantly from URLs or text. Built with HTML, CSS, and JavaScript, featuring a clean UI and real-time QR code generation.',
      link: 'https://github.com/Naveen1854/projects/tree/master/QR%20CODE%20GENERATOR',
    },
  ];

  scrollToProjects() {
    document.getElementById('projectsList')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

}
