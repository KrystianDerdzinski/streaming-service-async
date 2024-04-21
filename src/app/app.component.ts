import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestGoogleApiKeyComponent } from './test-google-api-key/test-google-api-key.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestGoogleApiKeyComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  playlistId = 'PL197873A96AF34C19';
}
