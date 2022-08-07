import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
