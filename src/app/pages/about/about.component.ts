// import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

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
      role: 'Fonder',
      image: 'assets/home/Portfolio1.jpeg',
      state: 'default'
    },
    {
      name: 'Jaypalbhai',
      role: 'CEO',
      image: 'assets/home/Portfolio1.jpeg',
      state: 'default'
    },
    // Add more team members here
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
    
    // Add more timeline events
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

  constructor() { }
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }
}
