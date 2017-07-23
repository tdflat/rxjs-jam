import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'bc-photo-search',
  templateUrl: 'photo-search.html',
  styleUrls: ['photo-search.scss']
})
export class PhotoSearchComponent {
  @Input() query = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
}
