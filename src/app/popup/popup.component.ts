import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecordsService } from '../records.service';
import { RecordsInfo } from '../all-records/records.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  newRecord: RecordsInfo[];
  editOrDelete: string = '';
  @Output() modelOff = new EventEmitter<{ state: boolean }>();

  constructor(private recordService: RecordsService) {
    this.newRecord = [];
  }

  ngOnInit(): void {
    this.editOrDelete = this.recordService.getValueOfEditOrDelete();
    this.newRecord = this.recordService.getCheckedRecords();
  }

  onSubmit(data: NgForm) {
    // record edition
    this.recordService.editRecord(this.newRecord[0].id, data.value);
    this.modelOff.emit({ state: false });
  }

  onCancel() {
    this.recordService.clearCheckedRecords();
    this.modelOff.emit({ state: false });
  }

  onDelete() {
    // record deletions
    this.recordService.deleteRecords();
    this.modelOff.emit({ state: false });
  }
}
