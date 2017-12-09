import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player/player.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {

  playerHistory;
  constructor(private playerSrv: PlayerService) { }

  ngOnInit() {
    this.playerHistory = this.playerSrv.history;
  }

}
