import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  skills = [
    { title: 'Core Java', image: './assets/images/Core-Java.png'},
    { title: 'Object-Oriented Programming', image: './assets/images/oops.svg' },
    { title: 'Spring Boot', image: './assets/images/Spring-Boot.png'},
    { title: 'Spring Security', image: './assets/images/Spring-Security.jpg'},
    { title: 'Hibernate', image: './assets/images/Hibernate.webp' },
    { title: 'MySQL', image: './assets/images/mysql.svg' },
    { title: 'JavaScript', image: './assets/images/javascript.svg' },
    { title: 'HTML', image: './assets/images/html.svg' },
    { title: 'CSS', image: './assets/images/css.svg' },
    { title: 'Git and Version Control', image: './assets/images/git.svg' }
  ];

  scrollToMySkills() {
    document.getElementById('MySkills')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

}