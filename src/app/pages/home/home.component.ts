import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  startCounting = false;
  private touchStartX = 0;
  private touchEndX = 0;
  private readonly SWIPE_THRESHOLD = 50;
  private readonly TOTAL_SLIDES = 4;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
    { value: 1500, suffix: '+', label: 'Current Clients', delay: 0, started: false },
    { value: this.calculateYearsOfExperience(), suffix: '+', label: 'Years Of Experience', delay: 100, started: false },
    { value: 2, suffix: '+', label: 'Workshops', delay: 200, started: false },
    { value: 10, suffix: '+', label: 'Recognitions', delay: 300, started: false },
    { value: 3500, suffix: '+', label: 'Signs Executed', delay: 400, started: false }
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS only in browser - use dynamic import to avoid SSR issues
      import('aos').then((AOSModule) => {
        const AOS = AOSModule.default || AOSModule;
        if (AOS && typeof AOS.init === 'function') {
          AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100,
            mirror: false
          });
        }
      }).catch((error) => {
        console.warn('AOS initialization failed:', error);
      });
      
      this.startSlideShow();
      this.initParallaxEffect();
      this.observeStatistics();
    }
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
    this.currentSlide = (this.currentSlide + 1) % this.TOTAL_SLIDES;
    this.resetSlideInterval();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.TOTAL_SLIDES - 1 : this.currentSlide - 1;
    this.resetSlideInterval();
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.TOTAL_SLIDES) {
      this.currentSlide = index;
      this.resetSlideInterval();
    }
  }

  private resetSlideInterval() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.startSlideShow();
  }

  // Touch event handlers for mobile swipe support
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent): void {
    // Prevent default to avoid scrolling while swiping
    event.preventDefault();
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const swipeDistance = this.touchStartX - this.touchEndX;
    
    if (Math.abs(swipeDistance) > this.SWIPE_THRESHOLD) {
      if (swipeDistance > 0) {
        // Swipe left - next slide
        this.nextSlide();
      } else {
        // Swipe right - previous slide
        this.prevSlide();
      }
    }
  }

  // Prevent event propagation for touch events on interactive elements
  preventEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private initParallaxEffect() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
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

  private observeStatistics() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounting = true;
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.statistics');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }
} 