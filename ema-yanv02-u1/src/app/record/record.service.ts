import { Injectable } from '@angular/core';
import {Record} from './record.model';
import {environment} from "../../environments/environment";
const testrecords: Record[] = [
  new Record(1, 'CS1013', 'Objektorientierte Programmierung', 6, 73, true, true, 2016),
  new Record(2, 'MN1007', 'Diskrete Mathematik', 6, 81, true, false, 2016),
  new Record(3, 'CS1019', 'Compilerbau', 6, 81, false, false, 2017),
  new Record(4, 'CS1020', 'Datenbanksysteme', 6, 92, false, false, 2017)
];
@Injectable({
  providedIn: 'root'
})

export class RecordService {
  constructor() {
    const recordsJSON: string | null = localStorage.getItem('records');
    if (recordsJSON) {
      this.records = JSON.parse(recordsJSON);
      this.nextId = parseInt(localStorage.getItem('nextId') ?? "1", 10);
    } else {
      this.records = [];
      this.nextId = 1;
      if (!environment.production) {
        // add some test data in dev env
        this.insertTestData();
      }
    }
  }
  private records: Record[] ;
  private nextId: number= 0
  private recordId: Record | undefined;



  findAll(){
    return this.records;
  }

  persist(record: Record): void {
    record.id = this.nextId++;
    this.records.push(record);
    this.save();
  }
  findById(id: number): Record | undefined {
    return this.records.find(r => r.id == id);
  }
  delete(id: number): boolean {
    if(this.findById(id) == undefined) {
      console.log("delete: id not found");
      return false;
    } else{
      this.records = this.records.filter(r => r.id != id);
      this.save();
      return true;
    }
  }
  update(record: Record): boolean {
    if (record.id !== undefined && record.id !== null) {
      if(this.findById(record.id) !== undefined) {
        this.records = this.records.map(r => r.id == record.id ? record : r);
        this.save();
        return true;
      }else return false;
    }else return false;
  }
  private save(): void {
    localStorage.setItem('records', JSON.stringify(this.records));
    localStorage.setItem('nextId', this.nextId.toString());
  }
  insertTestData(){
    this.records = testrecords;
  }
}
