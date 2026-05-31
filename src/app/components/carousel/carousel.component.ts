import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  icons = [
    { i: 1, class: 'devicon-angular-plain', color: '#DD0031' },
    { i: 2, class: 'devicon-bootstrap-plain',     color: '#7952b3'  },
    { i: 3, class: 'devicon-spring-plain',           color: '#6cb52d'  },
    { i: 4, class: 'devicon-git-plain',           color: '#e36414'  },
    { i: 5, class: 'devicon-azuresqldatabase-plain', color: '#3c6e71' },
    { i: 6, class: 'devicon-javascript-plain',    color: '#f7df1e'  },
    { i: 7, class: 'devicon-css3-plain', color: '#1572B6' },
    { i: 8, class: 'devicon-java-plain', color: '#f89820' },
    { i: 9, class: 'devicon-html5-plain', color: '#e34f26' },
    // { i: 10, class: 'devicon-php-plain',           color: '#8993be'  },
    // { i: 11, class: 'devicon-nodejs-plain',        color: '#68a063'  },
    // { i: 12, class: 'devicon-cplusplus-plain',     color: 'white'    },
  ];
}