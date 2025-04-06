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
    // { id: 'digital', name: 'Digital Signages' }
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
      image: 'assets/projects/pusti_art.jpg',
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
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/space.jpg',
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
      id: 3,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/mavdi_1.JPG',
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
      id: 4,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/premvati.JPG',
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
      id: 5,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/pizza_peel_lighting.jpg',
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
      id: 6,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/pizza_peel_interior.jpg',
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
      id: 7,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/gold_souk.JPG',
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
      id: 8,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/tedx_marvadi.jpg',
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
      id: 9,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/restourant.JPG',
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
      id: 10,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/rvs_kitchen.JPG',
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
      id: 11,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/itaca.JPG',
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
      id: 12,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/iphonix_mobile.JPG',
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
      id: 13,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/anant.JPG',
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
      id: 14,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/jk_restro.JPG',
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
      id: 15,
      title: 'Modern LED Signage',
      category: 'metal',
      image: 'assets/projects/prayaksh_kar_bhavan.JPG',
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
      id: 16,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/malabar_hills.JPG',
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
      id: 17,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/vrajrani.JPG',
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
      id: 18,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/shreenathji_jewellers.JPG',
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
      id: 19,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/sanskar_heights.JPG',
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
      id: 20,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/qutone.JPG',
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
      id: 21,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/jayavardhini.jpg',
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
      id: 22,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/asopalav_heaven.jpg',
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
      id: 23,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/bodyline.JPG',
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
      id: 24,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/club.jpg',
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
      id: 25,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/eternity.JPG',
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
      id: 26,
      title: 'Modern LED Signage',
      category: 'metal',
      image: 'assets/projects/gokul.JPG',
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
      id: 27,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/guj_casting.JPG',
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
      id: 28,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/hindware.JPG',
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
      id: 29,
      title: 'Modern LED Signage',
      category: 'metal',
      image: 'assets/projects/twin_tower.jpg',
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
      id: 30,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/gpcl.jpg',
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
      id: 31,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/westwood_school.jpg',
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
      id: 32,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/geer_gamthi.jpg',
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
      id: 33,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/marvadi.jpg',
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
      id: 34,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/kelvin.JPG',
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
      id: 35,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/ziptron.JPG',
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
      id: 36,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/hivik.JPG',
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
      id: 37,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/the_lands_end_villa.JPG',
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
      id: 38,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/wow_waw.JPG',
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
      id: 39,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/orbit_garden.JPG',
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
      id: 40,
      title: 'Modern LED Signage',
      category: 'metal',
      image: 'assets/projects/sahkar_bhavan.jpg',
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
      id: 41,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/the_city_mart.JPG',
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
      id: 42,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/vikas_medical.JPG',
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
    // arts and crafts
    { 
      id: 43,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/art_1.jpg',
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
      id: 44,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/art_2.jpg',
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
      id: 45,
      title: 'Modern LED Signage',
      category: 'neon',
      image: 'assets/projects/art_3.jpg',
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
      id: 46,
      title: 'Modern LED Signage',
      category: 'neon',
      image: 'assets/projects/art_4.JPG',
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
      id: 47,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/art_5.jpg',
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
      id: 48,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/art_6.JPG',
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
      id: 49,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/art_7.JPG',
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
      id: 50,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/map.PNG',
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
      id: 51,
      title: 'Modern LED Signage',
      category: 'acrylic',
      image: 'assets/projects/map_2.jpg',
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
      id: 52,
      title: 'Modern LED Signage',
      category: 'led',
      image: 'assets/projects/pusti.jpg',
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

  getCategoryColor(category: string): string {
    const colors:any = {
      'residential': 'var(--primary)',
      'commercial': 'var(--secondary)',
      'industrial': 'var(--accent)',
      // Add more categories as needed
    };
    return colors[category.toLowerCase()] || 'var(--primary)';
  }
}
