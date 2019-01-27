import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  new: News = new News();
  date: Date = new Date();
  news: News[] = [
    {
      id: 1,
      subtitle: 'Venez découvrir le monde du foot !',
      title: 'Welcome to Football',
      description: 'Notre nouveau jeux est enfin dispo !'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
