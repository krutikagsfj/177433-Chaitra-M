import { HttpClient } from '@angular/common/http';
import { GameService } from './../service/game.service';
import { Component, OnInit } from '@angular/core';
import { GameList } from '../Model/GameList';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private gameservice: GameService, private http: HttpClient) { }
  gameList: GameList[];
  // user:UserList;

  ngOnInit() {
    // this.gameservice.getUserById(2).subscribe((user:UserList)=>{this.amount=user.amount;});
    // console.log(this.amount);

    //fetching the gamelist details from GameList.json
    this.gameservice.getGameList().subscribe((game1: GameList[]) => { this.gameList = game1; });
  }

}
