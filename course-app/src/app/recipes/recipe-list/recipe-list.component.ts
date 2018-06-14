import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is the test recipe', 'https://c1.staticflickr.com/5/4307/35120274024_c0588ebbec_z.jpg'),
    new Recipe('another recipe', 'this is the second recipe test', 'https://c1.staticflickr.com/5/4307/35120274024_c0588ebbec_z.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
