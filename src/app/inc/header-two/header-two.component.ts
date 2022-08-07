import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {

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
