import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  heroes: IHeroe[];

  currentRenderedImages: boolean[] = [];

  allImagesRendered: boolean = false;

  constructor(private _heroesService: HeroesService) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this._heroesService.queryAllHeroes().subscribe({
      next: heroes => (this.heroes = heroes),
    });
  }

  imageRenderHandler = () => {
    this.currentRenderedImages = [...this.currentRenderedImages, true];

    if (!(this.currentRenderedImages.length === this.heroes.length)) {
      this.allImagesRendered = true;
    }
  };
}