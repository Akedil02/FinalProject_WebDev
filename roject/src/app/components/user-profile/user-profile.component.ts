import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  savedTrips: any[] = [];

  ngOnInit() {
    this.savedTrips = [
      { destination: 'Tokyo', date: '2025-06-15' },
      { destination: 'Rome', date: '2025-09-01' }
    ];
  }
}