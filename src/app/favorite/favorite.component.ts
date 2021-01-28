import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected: boolean | undefined;
  @Output('change') click = new EventEmitter();
  @Input('likesCount') likesCount: any;
  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
    this.likesCount += (this.isSelected) ? 1 : -1;
  }

  constructor() { }

  ngOnInit(): void {
  }


}

export interface FavoriteEventChangedArgs{
    newValue: boolean;
}
