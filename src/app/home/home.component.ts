import { SingleVideoInterface } from '../interfaces/single-video.interface';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
      // wyswietl tytuly filmow z playlistItems w HTML
    });
  }

  constructor(private apiService: ApiService) {}
}
