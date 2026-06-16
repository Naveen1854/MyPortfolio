import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {

  currentIndex: number = 0;

  certificates = [
    {
      title: 'Associate in IT Foundation Skills (Java)',
      issuer: 'Infosys Springboard',
      image: 'assets/certificates/IT Foundation in java.jpg',
      pdf: 'assets/certificates/IT Foundation in java.pdf'
    },

    {
      title: 'Java (Basic) Certificate',
      issuer: 'HackerRank',
      image: 'assets/certificates/java_basic.jpg',
      pdf: 'assets/certificates/java_basic.pdf'
    },

    {
      title: 'Python for Data Science',
      issuer: 'NPTEL Online Certification',
      image: 'assets/certificates/Python for Data Science.jpg',
      pdf: 'src/assets/certificates/NPTEL.pdf',
    }
  ];

  nextCertificate(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.certificates.length;
  }

  previousCertificate(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.certificates.length) %
      this.certificates.length;
  }

}
