import { CommonModule } from '@angular/common';
import { SingleVideoInterface } from '../interfaces/single-video.interface';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  playlistId = 'PL197873A96AF34C19';
  playlistName = '';
  playlistItems: SingleVideoInterface[] = [];

  ngOnInit(): void {
    this.apiService.getPlaylistName(this.playlistId).subscribe((playlist) => {
      this.playlistName = playlist.items[0].snippet.title;
    });

    this.apiService.getPlaylistItems(this.playlistId).subscribe((items) => {
      this.playlistItems = items.items;
      console.log(this.playlistItems);
      // wyswietl te dane przy pomocy *ngFor
    });
  }

  constructor(private apiService: ApiService) {}
}
