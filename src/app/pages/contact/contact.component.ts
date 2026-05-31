import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  onSubmit(): void {
    alert('Thank you for contacting me. I will get back to you soon!');
  }
}
