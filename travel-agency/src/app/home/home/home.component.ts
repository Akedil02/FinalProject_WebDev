import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  popularTours = [
    { id: 1, name: 'Paris Getaway', description: 'Explore the romantic city of Paris', image: 'assets/paris.jpg' },
    { id: 2, name: 'Tokyo Adventure', description: 'Experience the blend of tradition and modernity in Tokyo', image: 'assets/tokyo.jpg' },
    { id: 3, name: 'New York Exploration', description: 'Discover the vibrant metropolis of New York City', image: 'assets/nyc.jpg' }
  ];
}
