import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    profileData = {
    Name: 'Naveen Kusuma',
    From: 'Hyderabad, India',
    Age: '24',
    Gender: 'male',
    Institute: 'SR University Warangal'
  };

  
  get profileJson(): string {
    return JSON.stringify(this.profileData, null, 2);
  }
}
