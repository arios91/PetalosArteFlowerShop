import { Component, OnInit, Injectable } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { AwayDate } from '../../models/AwayDate';
import { AwayDatesService } from '../../services/awayDate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  discountChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  awayDate: AwayDate = {};

  constructor(
    private seo: SeoService,
    private AwayDatesService: AwayDatesService
  ) {}

  ngOnInit() {

    this.seo.generateTags({
      title: 'Petalos y Arte Flower Shop - Home',
      description: 'Home Page, we are a local flower shop in Mission Texas offering floral arrangement delivery to the Mission, Palmview, McAllen, Edinburg, Pharr, La Joya areas of the Rio Grande Valley'
    });

    this.AwayDatesService.getDates().subscribe(awayDates => {
      if(awayDates !== null && awayDates.length > 0){
        this.awayDate = awayDates[0];
        if(new Date() > this.awayDate.endDate){
          this.awayDate.active = false;
        };
      }
    });
  }

}
