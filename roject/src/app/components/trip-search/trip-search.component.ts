import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent {
  name = '';
  destination = '';
  startDate = '';
  endDate = '';

  constructor(private http: HttpClient) {}

  searchTrips() {
    this.http.get(`https://api.example.com/search?dest=${this.destination}`).subscribe(console.log);
  }

  bookTrip() {
    const payload = {
      name: this.name,
      destination: this.destination,
      startDate: this.startDate,
      endDate: this.endDate
    };
    this.http.post('https://api.example.com/book', payload).subscribe(console.log);
  }

  saveTrip() {
    this.http.post('https://api.example.com/save', { name: this.name, destination: this.destination }).subscribe(console.log);
  }

  getRecommendations() {
    this.http.get('https://api.example.com/recommendations').subscribe(console.log);
  }
}