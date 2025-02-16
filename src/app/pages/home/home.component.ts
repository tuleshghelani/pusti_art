import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    { image: 'assets/slide1.jpg', title: 'Welcome to Our Business', description: 'Professional Signboard Solutions' },
    { image: 'assets/slide2.jpg', title: 'Innovative Designs', description: 'Customized for Your Needs' },
    { image: 'assets/slide3.jpg', title: 'Quality Assurance', description: 'Durable and Reliable' }
  ];

  products = [
    { image: 'assets/product1.jpg', name: 'Product 1' },
    { image: 'assets/product2.jpg', name: 'Product 2' },
    { image: 'assets/product3.jpg', name: 'Product 3' }
  ];

  counters = [
    { value: 100, label: 'Happy Customers' },
    { value: 200, label: 'Completed Projects' },
    { value: 300, label: 'Years of Experience' }
  ];
  
  recentWorks = [
    { image: 'assets/work1.jpg', title: 'Recent Work 1' },
    { image: 'assets/work2.jpg', title: 'Recent Work 2' },
    { image: 'assets/work3.jpg', title: 'Recent Work 3' }
  ];
  
  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50
    });
  }
} 