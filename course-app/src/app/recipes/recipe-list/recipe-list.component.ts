import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is the twst recipe', 'https://cdn.pixabay.com/photo/2017/12/21/13/25/orange-3031789_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
