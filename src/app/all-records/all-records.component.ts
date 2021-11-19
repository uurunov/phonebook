import { Component, OnInit, DoCheck } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css'],
})
export class AllRecordsComponent implements OnInit, DoCheck {
  searchStarted: boolean = false;
  modelOpen: boolean = false;

  constructor(private recordService: RecordsService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.searchStarted = this.recordService.getSearchState();
  }

  setPopUpState(data: { state: boolean }) {
    this.modelOpen = data.state;
  }
}
