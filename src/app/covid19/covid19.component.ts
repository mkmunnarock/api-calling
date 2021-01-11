import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  data;
  country: any;
  collection = [];
  p: number = 1;


  constructor(private covid19Service: Covid19Service) {
    this.getDataFromAPI();
  }

  Search() {
    if (this.country == "") {
      this.ngOnInit();
    } else {
      this.data = this.data.filter(res => {
        return res.country.toLocaleLowerCase().match(this.country.toLocaleLowerCase());
      });
    }
  }

  key: string = 'case';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit(): void { }

  public getDataFromAPI() {
    this.covid19Service.Covid19Report().subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
