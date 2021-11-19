import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { RecordsInfo } from '../records.model';
import { RecordsService } from '../../records.service';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css'],
})
export class RecordsListComponent implements OnInit, DoCheck {
  records: RecordsInfo[] = [];
  checkedRecords: RecordsInfo[] = [];
  numOfRecords: number = this.records.length;
  checkAll: boolean = false;
  message: string = '';
  title: string = '';
  @Input() searchStarted: boolean = false;

  constructor(private recordService: RecordsService) {}

  ngOnInit(): void {
    this.records = this.recordService.getRecords();
  }

  ngDoCheck(): void {
    this.checkAll = this.recordService.getCheckAllState(this.checkAll);
    if (this.searchStarted) {
      this.records = this.recordService.getSearchedRecords();
      this.message = 'No such records';
      this.title = 'Search Results:';
    } else {
      this.records = this.recordService.getRecords();
      this.message = 'You have no records';
      this.title = 'All Records:';
    }
    this.numOfRecords = this.recordService.getNumOfRecords();
  }

  onClickAll() {
    /**
     * If TRUE: 
        it is disabled when it is clicked or all individual records are disabled
     * If FALSE:
        it is enabled when it is clicked or all individual records are enabled
     */
    this.checkAll = !this.checkAll;
    this.recordService.addCheckedRecords();
  }

  onClickOne(event: any) {
    let ID: number =
      event.target.offsetParent.parentElement.firstElementChild.textContent;
    this.recordService.addCheckedRecord(ID);
  }
}
