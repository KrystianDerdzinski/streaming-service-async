import { Injectable } from '@angular/core';
import { API_KEY } from './API_KEY.const';
import { HttpClient } from '@angular/common/http';
import { PlaylistInterface } from './interfaces/playlist.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getPlaylistName(playlistId: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${API_KEY}`;
    return this.http.get<PlaylistInterface>(url);
  }

  getPlaylistItems(playlistId: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${API_KEY}`;
  }

  constructor(private http: HttpClient) {}
}
