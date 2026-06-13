import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, CarouselComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //   profileData = {
  //   Name: 'Naveen Kusuma',
  //   From: 'Hyderabad, India',
  //   Age: '24',
  //   Gender: 'male',
  //   Institute: 'SR University Warangal'
  // };

  
  // get profileJson(): string {
  //   return JSON.stringify(this.profileData, null, 2);
  // }
}
