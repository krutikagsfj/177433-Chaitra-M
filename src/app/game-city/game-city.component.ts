import { HttpClient } from '@angular/common/http';
import { GameService } from './../service/game.service';
import { UserList } from './../Model/userList';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-game-city',
  templateUrl: './game-city.component.html',
  styleUrls: ['./game-city.component.css']
})
export class GameCityComponent implements OnInit {

  constructor(private form: FormBuilder, private router: Router, private http: HttpClient, private gameservice: GameService) { }
  gameForm: FormGroup;
  user: boolean = false;
  page: boolean = true;
  amount: number;

  ngOnInit() {
    this.gameForm = this.form.group(
      {
        //validating
        "name": [, [Validators.required, Validators.pattern('[a-zA-z]{1,}')]],
        "address": [, Validators.required],
        "amount": [, [Validators.required, Validators.pattern('[0-9]{3,}')]]
      }
    )
  }

  onSubmit(gameForm: FormGroup) {
    // this.gameForm.value.id=1;

    //deducting amount for service charge
    this.amount = this.gameForm.value.amount - 100;;
    this.user = true;
    this.page = false;

    //calling play router
    // // this.http.post(this.baseUrl,gameForm)
    // this.router.navigate(['play'])
  }

}
