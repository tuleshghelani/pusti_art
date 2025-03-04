import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  selectedCategory: string = 'all';
  showModal: boolean = false;
  selectedProject: any = null;

  categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'led', name: 'LED Sign Boards' },
    { id: 'acrylic', name: 'Acrylic Signs' },
    { id: 'neon', name: 'Neon Signs' },
    { id: 'metal', name: 'Metal Letters' },
    { id: 'digital', name: 'Digital Signages' }
  ];

  stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Cities Covered' },
    { number: '300+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' }
  ];

  portfolioItems = [
    {
      id: 1,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/portfolio/led1.jpg',
      client: 'Tech Solutions Inc.',
      description: 'Custom LED signage with dynamic lighting effects and programmable displays. Features energy-efficient modules with remote control capabilities.',
      materials: ['LED Modules', 'Aluminum Composite', 'Acrylic'],
      location: 'Downtown Business District',
      year: '2023',
      highlights: [
        'Energy-efficient LED modules',
        'Remote-controlled display',
        'Weather-resistant design',
        'Custom animation sequences'
      ]
    },
    {
      id: 2,
      title: 'Luxury Retail Signage',
      category: 'acrylic',
      image: 'assets/portfolio/acrylic1.jpg',
      client: 'Fashion Boutique',
      description: 'Premium acrylic signage with gold-plated lettering and backlit elements, creating an elegant and sophisticated brand presence.',
      materials: ['Premium Acrylic', 'Gold Plating', 'LED Backlighting'],
      location: 'High-end Shopping Mall',
      year: '2023',
      highlights: [
        'Gold-plated finish',
        'Crystal-clear acrylic',
        'Ambient backlighting',
        'Premium mounting system'
      ]
    },
    // Add more portfolio items here
  ];

  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true
    });
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
  }

  getFilteredProjects() {
    return this.selectedCategory === 'all' 
      ? this.portfolioItems 
      : this.portfolioItems.filter(item => item.category === this.selectedCategory);
  }

  openProjectModal(project: any) {
    this.selectedProject = project;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProject = null;
  }
}
