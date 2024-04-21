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

  ngOnInit(): void {
    this.apiService.getPlaylistName(this.playlistId).subscribe((playlist) => {
      this.playlistName = playlist.items[0].snippet.title;
    });
  }

  constructor(private apiService: ApiService) {}
}
