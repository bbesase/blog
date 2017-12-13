import { Component, OnInit } from '@angular/core';
import { FeedService } from '../route/feed/feed.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  posts: any;

  constructor(private _feedService: FeedService) {
    this.posts = this._feedService.getPosts();
  }

  ngOnInit() { }
}