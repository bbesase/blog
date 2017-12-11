import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: any = [
    { 
      title: 'Home',
      icon: 'home',
      route: ''
    },
    {
      title: 'About Me',
      icon: 'user',
      route: 'aboutme'
    },
    {
      title: 'Contact',
      icon: 'at',
      route: 'contact'
    }
  ];

  constructor() {
    
   }

  ngOnInit() {
    

    console.log(this.items)
   }

   route(event: any) {
    console.log("event", event)
   }
}