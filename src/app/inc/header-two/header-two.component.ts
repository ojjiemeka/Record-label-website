import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router"
@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {

  toggle:boolean = false;
  title: any;
  // onUrlChange: any;

  constructor( 
    // private activeRoute:Router
    private router:Router
   ) {}
  
   
   ngOnInit(): void {
    this.routeChange();
    // this.activeRoute.events.subscribe(this.onUrlChange.bind(this))
  }

  routeChange(){
    // if (this.router.url.startsWith('/artist')) {
    //   this.title = "Artist"
    //   console.log(this.title);
    //   return true;
    // }
    this.title = this.router.url;
    console.log(this.router.url)
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
