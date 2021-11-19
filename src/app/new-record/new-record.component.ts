import { Component, OnInit, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecordsService } from '../records.service';
import { RecordsInfo } from '../all-records/records.model';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.css'],
})
export class NewRecordComponent implements OnInit, DoCheck {
  newRecord: RecordsInfo;
  inputName: boolean = false;
  inputPhone: boolean = false;
  inputValid: boolean = false;

  constructor(private recordService: RecordsService) {
    this.newRecord = new RecordsInfo(0, '', 0, false);
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.inputName && this.inputPhone) {
      this.inputValid = true;
    } else {
      this.inputValid = false;
    }
  }

  onSubmit(data: NgForm) {
    this.recordService.addRecord(data.value);
    data.reset();
  }

  checkName(input: any) {
    let letters = /^[A-Za-z]+$/;
    if (input.match(letters) && input.length > 2) {
      this.inputName = true;
    } else {
      this.inputName = false;
    }
  }

  checkPhone(input: any) {
    let digits = /^[0-9]+$/;
    if (input.match(digits) && input.length === 9) {
      this.inputPhone = true;
    } else {
      this.inputPhone = false;
    }
  }
}
