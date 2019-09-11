import { Component, OnInit } from '@angular/core';
import { ArrangementService } from '../../services/arrangement.service';
import { Arrangement} from '../../models/Arrangement';


@Component({
  selector: 'app-arrangements',
  templateUrl: './arrangements.component.html',
  styleUrls: ['./arrangements.component.css']
})
export class ArrangementsComponent implements OnInit {
  allArrangements: Arrangement[];
  arrangements: Arrangement[];
  categories: string[] = [];
  selection: string = 'All';
  sortCategories: string[] = [];
  sortSelection: string = 'Newest';

  arrangementPages: Arrangement[][] = [];
  arrangementsPerPage = 9;
  currentPage = 0;
  pages: string[] = [];
  atBeginning:boolean = true;
  atEnd:boolean = false;



  constructor(private arrangementService:ArrangementService) { }

  ngOnInit() {
    this.arrangementService.getArrangements().subscribe(arrangements =>{
      this.allArrangements = arrangements;

      for(let arrangement of this.allArrangements){

        if(!(arrangement.category === "any")){
          var tmpVar = this.categories.find(x => x == arrangement.category);
          if(!tmpVar){
            this.categories.unshift(arrangement.category);
          }
        }
      }

      this.filterByCategory();
    });
    this.sortCategories.unshift('Price: High to Low');
    this.sortCategories.unshift('Price: Low to High');
    this.sortCategories.unshift('Most Popular');
  }

  filterByCategory(){
    this.arrangements = [];
    for(let arrangement of this.allArrangements){
      if(this.selection === arrangement.category || this.selection === "any" || this.selection === "All"){
        this.arrangements.unshift(arrangement);
      }
    }
    this.sortByPrice();
  }

  sortByPrice(){
    if(this.sortSelection === "Most Popular"){
      this.arrangements.sort((leftSide, rightSide): number =>{
        if(leftSide.popularity < rightSide.popularity) return 1;
        if(leftSide.popularity > rightSide.popularity) return -1;
        return 0;
      });
    }else if(this.sortSelection === "Price: Low to High"){
      this.arrangements.sort((leftSide, rightSide): number =>{
        if(leftSide.price < rightSide.price) return -1;
        if(leftSide.price > rightSide.price) return 1;
        return 0;
      });
    }else if(this.sortSelection === "Price: High to Low"){
      this.arrangements.sort((leftSide, rightSide): number =>{
        if(leftSide.price < rightSide.price) return 1;
        if(leftSide.price > rightSide.price) return -1;
        return 0;
      });
      
    }else{
        this.arrangements.sort((leftSide, rightSide): number =>{
          if(leftSide.id < rightSide.id) return 1;
          if(leftSide.id > rightSide.id) return -1;
          return 0;
        });
    }
    this.buildArrangementPages();
  }

  buildArrangementPages(){
    var counter = 0;
    var arrX = 0;
    this.pages = [];
    for(let arrangement of this.arrangements){
      if(counter == 0){
        this.arrangementPages[arrX] = [];
        this.pages.push(this.pages.length.toString(10));
      }


      this.arrangementPages[arrX][counter] = arrangement;
      if(counter == this.arrangementsPerPage-1){
        counter = 0;
        arrX++;
      }else{
        counter++;
      }
    }
    this.setPageBooleans();
  }

  goToPrevious(){
    if(this.currentPage != 0){
      this.currentPage--;
    }
    this.setPageBooleans();
  }
  goToNext(){
    if(this.currentPage < this.pages.length-1){
      this.currentPage++;
    }
    this.setPageBooleans();
  }
  goToPage(pageIndex){
    this.currentPage = pageIndex;
    this.setPageBooleans();
  }

  setPageBooleans(){
    if(this.currentPage == 0){
      this.atBeginning = true;
      this.atEnd = false;
    }
    if(this.currentPage == this.pages.length-1){
      this.atEnd = true;
      this.atBeginning = false;
    }
    if(this.currentPage > 0 && this.currentPage < this.pages.length-1){
      this.atBeginning = false;
      this.atEnd = false;
    }
  }

}
