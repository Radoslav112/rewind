import { Component, OnInit } from '@angular/core';
import { RecipiesService } from '../services/recipies.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies = this.recipiesService.getRecipies();

  constructor(private recipiesService: RecipiesService) { }

  ngOnInit(): void {
  }

}
