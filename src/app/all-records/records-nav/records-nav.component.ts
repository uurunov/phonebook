import { Component, OnInit, DoCheck } from '@angular/core';
import { RecordsService } from '../../records.service';

@Component({
  selector: 'app-records-nav',
  templateUrl: './records-nav.component.html',
  styleUrls: ['./records-nav.component.css'],
})
export class RecordsNavComponent implements OnInit, DoCheck {
  numOfRecords: number = 0;
  disabled: boolean = false;
  searchStarted: boolean = false;

  constructor(private recordService: RecordsService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.numOfRecords = this.recordService.getNumOfRecords();
    this.searchStarted = this.recordService.getSearchState();
  }

  onBackClicked(): void {
    this.recordService.setSearchState(false);
  }
}
