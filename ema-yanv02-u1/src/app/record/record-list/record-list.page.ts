import { Component, OnInit } from '@angular/core';
import {Record} from '../record.model';
import {Statistic} from '../statistic.model';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.page.html',
  styleUrls: ['./record-list.page.scss'],
})
export class RecordListPage implements OnInit {
  records: Record[] = [
    new Record(1, 'CS1013', 'Objektorientierte Programmierung', 6, 73, true, true, 2016),
    new Record(2, 'MN1007', 'Diskrete Mathematik', 6, 81, true, false, 2016),
    new Record(3, 'CS1019', 'Compilerbau', 6, 81, false, false, 2017),
    new Record(4, 'CS1020', 'Datenbanksysteme', 6, 92, false, false, 2017)
  ];

  constructor() {

  }
  ngOnInit() {
  }

  showStats() {
    this.records = [];
    console.log("showStats");
    console.log("statsNoRecords");
    console.log(new Statistic(this.records));
    this.records.push(
      new Record(1, 'CS1013', 'Objektorientierte Programmierung', 6, 73, true, true, 2016),
      new Record(2, 'MN1007', 'Diskrete Mathematik', 6, 81, true, false, 2016),
    );
    console.log("stats2Records");
    console.log(new Statistic(this.records));
    this.records.push(
      new Record(3, 'CS1019', 'Compilerbau', 6, 81, false, false, 2017),
      new Record(4, 'CS1020', 'Datenbanksysteme', 6, 92, false, false, 2017)
    );
    console.log("stats4Records");
    console.log(new Statistic(this.records));

  }

  createRecord() {

  }
}
