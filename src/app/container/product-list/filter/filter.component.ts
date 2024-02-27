import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'filter-comp',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComp {
  @Input()
  all: number;
  @Input()
  inStock: number;
  @Input()
  outOfStock: number;

  SelectedFilterRadioButton: string = 'all';

  @Output()
  SelectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioChanged() {
    console.log(this.SelectedFilterRadioButton);
    this.SelectedFilterRadioButtonChanged.emit(this.SelectedFilterRadioButton);
  }

  
}
