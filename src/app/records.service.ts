import { Injectable } from '@angular/core';
import { RecordsInfo } from './all-records/records.model';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  private records: RecordsInfo[];
  private checkedRecords: RecordsInfo[];
  private searchedRecords: RecordsInfo[];
  private copyOfRecords: RecordsInfo[];
  private EditOrDelete: string = '';
  private searchStarted: boolean = false;

  constructor() {
    this.records = [];
    this.checkedRecords = [];
    this.searchedRecords = [];
    this.copyOfRecords = [];
  }

  // records
  addRecord(data: { name: string; phone: number }) {
    let id: number = this.getNumOfRecords();
    this.records.push(new RecordsInfo(id + 1, data.name, data.phone, false));
  }

  getRecords(): RecordsInfo[] {
    return this.records;
  }

  editRecord(id: number, data: { name: string; phone: number }) {
    this.records.find(function (rec) {
      if (rec.id === id) {
        if (data.name) {
          rec.name = data.name;
        }
        if (data.phone) {
          rec.phone = data.phone;
        }
        rec.state = false;
      }
    });
    this.checkedRecords.length = 0;
    this.searchStarted = false;
  }

  deleteRecords() {
    // if all records are selected
    if (this.getNumOfCheckedRecords() === this.getNumOfRecords()) {
      this.records.length = 0;
      this.checkedRecords.length = 0;
      this.searchedRecords.length = 0;
    } else {
      this.copyOfRecords = this.records.slice();
      this.records.length = 0;
      this.copyOfRecords.forEach((rec) => {
        if (rec.state === false) {
          this.addRecord({ name: rec.name, phone: rec.phone });
        }
      });
      this.checkedRecords.length = 0;
      this.searchedRecords.length = 0;
      this.searchStarted = false;
    }
  }

  getNumOfRecords(): number {
    return this.records.length;
  }

  setRecordState(recID: number) {
    let finalState: boolean = false;
    for (let rec of this.records) {
      if (rec.id == recID) {
        rec.state = !rec.state;
        finalState = rec.state;
        break;
      }
    }
    return finalState;
  }

  // checkedRecords
  addCheckedRecord(recID: number) {
    if (this.setRecordState(recID)) {
      this.checkedRecords.push(this.records[recID - 1]);
    } else {
      let index = this.checkedRecords.findIndex(
        (rec: RecordsInfo) => rec.state === false
      );
      this.checkedRecords.splice(index, 1);
    }
  }

  addCheckedRecords() {
    this.records.forEach((rec) => (rec.state = !rec.state));
    if (this.records[0].state === true) {
      this.checkedRecords = this.records.slice();
    } else {
      this.checkedRecords.length = 0;
    }
  }

  getCheckedRecords(): RecordsInfo[] {
    return this.checkedRecords;
  }

  clearCheckedRecords() {
    this.checkedRecords.length = 0;
    this.records.forEach((rec) => (rec.state = false));
  }

  getNumOfCheckedRecords(): number {
    return this.checkedRecords.length;
  }

  // records & checkedRecords
  setRecordStateAll() {
    this.records.forEach((rec) => (rec.state = !rec.state));
    this.checkedRecords = this.records;
  }

  getCheckAllState(status: boolean): boolean {
    /**
     * If TRUE: 
        it is disabled when it is clicked or all individual records are disabled
     * If FALSE:
        it is enabled when it is clicked or all individual records are enabled
     */
    let finalState: boolean = status;
    if (finalState) {
      if (this.getNumOfCheckedRecords() === 0) {
        finalState = false;
      }
    } else {
      if (this.getNumOfCheckedRecords() === this.getNumOfRecords()) {
        finalState = true;
      }
    }
    return finalState;
  }

  // searchRecords
  searchRecordsByName(name: string) {
    this.searchedRecords.length = 0;
    this.records.forEach((rec) =>
      rec.name === name ? this.searchedRecords.push(rec) : 'none'
    );
    this.searchStarted = true;
  }

  getSearchedRecords(): RecordsInfo[] {
    return this.searchedRecords;
  }

  getNumOfSearchedRecords(): number {
    return this.searchedRecords.length;
  }

  // setEditOrDelete
  setValueOfEditOrDelete(key: string) {
    this.EditOrDelete = key;
  }

  getValueOfEditOrDelete() {
    return this.EditOrDelete;
  }

  // other
  setSearchState(state: boolean) {
    this.searchStarted = state;
    this.records.forEach((rec) => (rec.state = false));
    this.checkedRecords.length = 0;
  }

  getSearchState() {
    return this.searchStarted;
  }
}
