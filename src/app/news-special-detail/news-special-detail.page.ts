import { Component, OnInit } from '@angular/core';
import { NavParService } from '../nav-par.service';

@Component({
  selector: 'app-news-special-detail',
  templateUrl: './news-special-detail.page.html',
  styleUrls: ['./news-special-detail.page.scss'],
})
export class NewsSpecialDetailPage implements OnInit {
  NEWSSPECIAL;
  constructor(
    private navPar: NavParService
  ) { }

  ngOnInit() {
    this.NEWSSPECIAL = this.navPar.getter();
  }

}
