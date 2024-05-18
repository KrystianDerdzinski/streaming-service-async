import { CommonModule } from '@angular/common';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable, map } from 'rxjs';
import { PlaylistItemsInterface } from '../interfaces/playlist-items.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly playlistIds = [
    'PL197873A96AF34C19',
    'PLpkgjbXReLDIJ_dAREZBBz-Vizn9mfjSN',
  ];
  playlistNames: Observable<string>[];
  playlistItems: Observable<PlaylistItemsInterface>[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.playlistNames = this.playlistIds.map((playlistId) =>
      this.getPlaylistName$(playlistId)
    );

    this.playlistItems = this.playlistIds.map((playlistId) =>
      this.getPlaylistItems$(playlistId)
    );
  }

  getPlaylistName$(playlistId: string): Observable<string> {
    return this.apiService
      .getPlaylistName$(playlistId)
      .pipe(map((data) => data.items[0].snippet.title));
  }

  getPlaylistItems$(playlistId: string) {
    return this.apiService.getPlaylistItems$(playlistId);
  }
}
