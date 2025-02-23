import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface ProcessStep {
  title: string;
  description: string;
}

interface Technology {
  name: string;
  description: string;
  icon: string;
}

interface Statistic {
  value: number;
  label: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
    isDarkTheme = false;
    searchTerm = '';
    selectedCategory = 'all';
    testimonialPosition = 0;

    projects = [
        {
            id: 1,
            title: 'Downtown Plaza LED Display',
            description: 'Massive LED billboard installation for city center',
            category: 'led',
            technologies: ['LED Matrix', 'Smart Control', 'Weather-Proof'],
            image: 'assets/images/project1.jpg',
            showDetails: false
        },
        // Add more projects...
    ];

    testimonials = [
        {
            client: 'Sarah Johnson',
            company: 'Metro Mall',
            feedback: 'The LED installation transformed our shopping center. Footfall increased by 40% since installation.',
            avatar: 'assets/images/testimonial1.jpg'
        },
        // Add more testimonials...
    ];

    statistics: Statistic[] = [
        { value: 500, label: 'Projects Completed' },
        { value: 150, label: 'Happy Clients' },
        { value: 50, label: 'Cities Covered' },
        { value: 15, label: 'Years Experience' }
    ];

    processSteps: ProcessStep[] = [
        {
            title: 'Consultation',
            description: 'Understanding your vision and requirements'
        },
        // Add more steps...
    ];

    technologies: Technology[] = [
        {
            name: 'LED Matrix',
            description: 'High-brightness LED display technology',
            icon: 'assets/icons/led-matrix.svg'
        },
        // Add more technologies...
    ];

    ngOnInit() {
        this.checkPreferredTheme();
    }

    checkPreferredTheme() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.isDarkTheme = true;
        }
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
    }

    scrollToProjects() {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }

    filterByCategory(category: string) {
        this.selectedCategory = category;
    }

    filteredProjects() {
        return this.projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                                project.description.toLowerCase().includes(this.searchTerm.toLowerCase());
            const matchesCategory = this.selectedCategory === 'all' || project.category === this.selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }

    nextTestimonial() {
        this.testimonialPosition -= 100;
        if (this.testimonialPosition < -(this.testimonials.length - 1) * 100) {
            this.testimonialPosition = 0;
        }
    }

    previousTestimonial() {
        this.testimonialPosition += 100;
        if (this.testimonialPosition > 0) {
            this.testimonialPosition = -(this.testimonials.length - 1) * 100;
        }
    }

    onSubmit(form: any) {
        if (form.valid) {
            console.log('Form submitted:', form.value);
            // Add your form submission logic here
        }
    }

    requestQuote() {
        // Add your quote request logic here
    }
}
