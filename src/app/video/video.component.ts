import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafePipe } from '../safe.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [SafePipe, MatIconModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements OnInit {
  videoId = '';
  videoUrl = '';

  constructor(private route: ActivatedRoute) {
    console.log('hello from constructor');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((item) => {
      this.videoId = item['id'];
      this.videoUrl =
        'https://www.youtube.com/embed/' +
        this.videoId +
        '?si=0MfiEUX3LOHwPi3g';
    });
  }
}
