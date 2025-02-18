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
      name: 'John Doe',
      role: 'CEO',
      funFact: 'Loves skydiving',
      image: 'assets/team/john.jpg',
      state: 'default'
    },
    // Add more team members here
  ];

  timelineEvents = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Our journey began...'
    },
    // Add more timeline events
  ];

  features = [
    {
      icon: 'assets/icons/innovation.svg',
      title: 'Innovation',
      description: 'Pushing boundaries with creative solutions'
    },
    // Add more features
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
