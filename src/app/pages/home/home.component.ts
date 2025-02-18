import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CountUpModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;

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

  portfolioItems = [
    {
      image: 'assets/home/Portfolio1.jpeg',
      title: 'Custom Signage',
      description: 'Premium business signage solutions'
    },
    {
      image: 'assets/home/Portfolio2.jpeg',
      title: 'Digital Displays',
      description: 'Modern digital signage implementations'
    },
    {
      image: 'assets/home/Portfolio3.jpeg',
      title: 'Installation Projects',
      description: 'Professional signage installations'
    },
    {
      image: 'assets/home/Portfolio4.jpeg',
      title: 'Custom Signage',
      description: 'Premium business signage solutions'
    },
    {
      image: 'assets/home/Portfolio5.jpeg',
      title: 'Custom Signage',
      description: 'Premium business signage solutions'
    },
    {
      image: 'assets/home/Portfolio6.jpeg',
      title: 'Custom Signage',
      description: 'Premium business signage solutions'
    },
  ];

  statistics = [
    { value: 2000, suffix: '+', label: 'Current Clients', delay: 0 },
    { value: this.calculateYearsOfExperience(), suffix: '+', label: 'Years Of Experience', delay: 100 },
    { value: 2, suffix: '+', label: 'Workshops', delay: 200 },
    { value: 10, suffix: '+', label: 'Recognitions', delay: 300 },
    { value: 3500, suffix: '+', label: 'Signs Executed', delay: 400 }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50
    });
    this.startSlideShow();
    this.initParallaxEffect();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 2;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? 1 : 0;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  private initParallaxEffect() {
    window.addEventListener('scroll', () => {
      const images = document.querySelectorAll('.parallax-img');
      images.forEach((img: Element) => {
        const speed = (img as HTMLElement).classList.contains('offset') ? 0.15 : 0.1;
        const rect = (img as HTMLElement).getBoundingClientRect();
        const scrolled = window.pageYOffset;
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          (img as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
        }
      });
    });
  }

  private calculateYearsOfExperience(): number {
    const startYear = 2012;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }
} 