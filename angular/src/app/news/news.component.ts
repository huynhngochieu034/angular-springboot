import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { News } from '../dto/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news=[]; 
  selectedProduct?:News;
  constructor(private _newservice: NewsService) { }

  ngOnInit() {
    this._newservice.getNews().subscribe(data=> this.news = data);
  }
  
  

  updateNew(newa:News) {
    this.selectedProduct = newa;
  } 
}
