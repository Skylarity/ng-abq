import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[] = [
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."},
  	{author: "Skylarity", date: Date.now(), title: "Example post title."}
  ];

  constructor() { }

  ngOnInit() {
  }

}
