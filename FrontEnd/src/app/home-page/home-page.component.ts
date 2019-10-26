import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getDbData().subscribe((dbb)=>{
      console.log(dbb);
    })
  }

}
