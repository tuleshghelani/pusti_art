// import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  teamMembers = [
    {
      name: 'Kartikbhai',
      role: 'Founder',
      image: 'assets/home/Portfolio1.jpeg',
      state: 'default'
    },
  ];

  timelineEvents = [
    {
      year: '2012',
      title: 'Company Founded',
      description: 'Our journey began...'
    },
    {
      year: '2016',
      title: 'title 2',
      description: 'Our journey began...'
    },
    {
      year: '2019',
      title: 'title 3',
      description: 'Our journey began...'
    },
    {
      year: '2022',
      title: 'title 4',
      description: 'Our journey began...'
    },
    
  ];

  features = [
    {
      icon: 'assets/icons/innovation.svg',
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge signage solutions'
    },
    {
      icon: 'assets/icons/quality.svg',
      title: 'Quality',
      description: 'Uncompromising commitment to excellence in every project'
    },
    {
      icon: 'assets/icons/service.svg',
      title: 'Service',
      description: 'Dedicated support throughout your signage journey'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Use afterNextRender to ensure AOS only initializes in browser after render
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
        setTimeout(() => {
          this.initializeAOS();
        }, 0);
      }
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  private initializeAOS(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const importAOS = () => import('aos');
      importAOS().then((AOSModule) => {
        const AOS = AOSModule.default || AOSModule;
        if (AOS && typeof AOS.init === 'function') {
          AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out'
          });
        }
      }).catch(() => {
        // Silently fail - AOS is not critical for functionality
      });
    }
  }
}
