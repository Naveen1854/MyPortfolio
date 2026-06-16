import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import emailjs from '@emailjs/browser';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  isSending = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]
    });
  }

  onSubmit(): void {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.successMessage = '';
    this.errorMessage = '';

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    emailjs.send(
      'service_ka045gf',
      'template_c77jyvz',
      templateParams,
      'hvmrmEhfvGU2xe80B'
    )
      .then(() => {

        this.successMessage =
          'Thank you for contacting me. I will get back to you soon.';

        this.contactForm.reset();
      })
      .catch((error) => {
        console.log('EmailJS Error:', error);
        console.log('Status:', error.status);
        console.log('Text:', error.text);

        alert('Failed to send message');
      })
      .finally(() => {

        this.isSending = false;
      });
  }

}