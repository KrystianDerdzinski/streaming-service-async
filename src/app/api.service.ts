import { Injectable } from '@angular/core';
import { API_KEY } from './API_KEY.const';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getPlaylistName() {
    const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=PL197873A96AF34C19&key=${API_KEY}`;
  }

  constructor() {
    console.log('hello from api service!');
  }
}
