import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  playlistId = 'PL197873A96AF34C19';

  constructor(private apiService: ApiService) {}
}

// zadanie:
// uzyj dependency injection (w constructor, aby wstrzyknac api.service do home component.
// jesli Ci sie udalo, to w konsoli widzisz "hello from api service"
