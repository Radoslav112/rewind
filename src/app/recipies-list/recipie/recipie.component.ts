import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css']
})
export class RecipieComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe(0, '', [], '');

  constructor() { }

  ngOnInit(): void {
  }

}
