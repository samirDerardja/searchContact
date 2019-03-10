import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from './home.service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: any="";
  jsonData:any;

  constructor(public navCtrl: NavController, public data: Data) {

  }


  ionViewDidLoad(){
    this.setFilteredItems();
  }

  setFilteredItems() {
 
        this.jsonData = this.data.filterItems(this.searchTerm);
 
    }
  
    setFilteredAge() {

      this.jsonData = this.data.filterAge(this.searchAge);
    }
 
}
