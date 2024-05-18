import { CommonModule } from '@angular/common';
import { SingleVideoInterface } from '../interfaces/single-video.interface';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly playlistId = [
    'PL197873A96AF34C19',
    'PLpkgjbXReLDIJ_dAREZBBz-Vizn9mfjSN',
  ];
  playlistName: string[] = [];
  playlistItems: SingleVideoInterface[] = [];

  ngOnInit(): void {
    this.playlistId.forEach((item) => {
      this.apiService.getPlaylistName(item).subscribe((playlist) => {
        this.playlistName.push(playlist.items[0].snippet.title);
      });
    });

    // this.apiService.getPlaylistItems(this.playlistId).subscribe((items) => {
    //   this.playlistItems = items.items;
    //   console.log(this.playlistItems);
    // });
  }

  constructor(private apiService: ApiService) {}
}
