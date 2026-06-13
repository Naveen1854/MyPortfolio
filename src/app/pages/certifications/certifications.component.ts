import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
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

    // Add more certificates here

    // {
    //   title: 'AWS Cloud Virtual Internship',
    //   issuer: 'AWS Academy',
    //   image: 'assets/certificates/aws.jpg',
    //   pdf: 'assets/certificates/aws.pdf'
    // }
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
