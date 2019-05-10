import { GameList } from './../Model/GameList';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }
  gameListUrl:string='http://localhost:3000/gamelist';

  getGameList(){
    return this.http.get<GameList[]>(this.gameListUrl);
  }

   // baseUrl:string='http://localhost:3001/userList';

  // getUserById(id: number) {
  //   return this.http.get(this.baseUrl + '/' + id);
  // }

}
