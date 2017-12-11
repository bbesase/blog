import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
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
    },
    {
      title: 'Feed',
      icon: 'feed',
      route: 'feed'
    }
  ];

  constructor() { }

  ngOnInit() { }
}