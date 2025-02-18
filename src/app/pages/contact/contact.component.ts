import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;
  submitStatus: 'success' | 'error' | null = null;

  contactInfo = {
    email: 'hello@company.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Street, Tech City, TC 12345'
  };

  socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
    { name: 'Facebook', icon: 'fab fa-facebook', url: '#' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      // Handle form submission
      this.submitStatus = 'success';
      setTimeout(() => {
        this.submitStatus = null;
        this.contactForm.reset();
        this.submitted = false;
      }, 3000);
    } else {
      this.submitStatus = 'error';
    }
  }

}
