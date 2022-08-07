import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent implements OnInit {

  toggle:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }

  closeMenu(){
    this.toggle = false;
    console.log(this.toggle);
  }

}
