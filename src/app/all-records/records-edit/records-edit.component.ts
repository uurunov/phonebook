import {
  Component,
  OnInit,
  DoCheck,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecordsService } from '../../records.service';

@Component({
  selector: 'app-records-edit',
  templateUrl: './records-edit.component.html',
  styleUrls: ['./records-edit.component.css'],
})
export class RecordsEditComponent implements OnInit, DoCheck {
  numOfRecords: number = 0;
  disabled: boolean = false;
  valOfInput: string = '';
  numOfCheckedRecords: number = 0;
  @Output() popUpEnable = new EventEmitter<{ state: boolean }>();

  constructor(private recordService: RecordsService) {}

  ngOnInit(): void {
    this.numOfRecords = this.recordService.getNumOfRecords();
  }

  ngDoCheck(): void {
    this.numOfCheckedRecords = this.recordService.getNumOfCheckedRecords();
  }

  onTyping(input: string) {
    this.valOfInput = input;
  }

  onSearch(formData: NgForm) {
    this.recordService.searchRecordsByName(formData.value.cname);
    formData.reset();
    this.valOfInput = '';
  }

  onDelete() {
    this.popUpEnable.emit({ state: true });
    this.recordService.setValueOfEditOrDelete('delete');
  }

  onEdit() {
    this.popUpEnable.emit({ state: true });
    this.recordService.setValueOfEditOrDelete('edit');
  }
}
