import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'search-comp',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText = '';
  @Output()
  ChangedSearchText: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput') searchTextInput: ElementRef;
  onSearchButtonClicked() {
    console.log(this.searchTextInput.nativeElement.value + 'ccccc');
    this.searchText = this.searchTextInput.nativeElement.value;
    this.ChangedSearchText.emit(this.searchText);
  }
}
