import { Component, OnInit } from '@angular/core';
import {Record} from '../record.model';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.page.html',
  styleUrls: ['./record-list.page.scss'],
})
export class RecordListPage implements OnInit {
  records: Record[] = [
    new Record(1, 'CS1013', 'Objektorientierte Programmierung', 6, 73, true, true, 2016),
    new Record(2, 'MN1007', 'Diskrete Mathematik', 6, 81, true, false, 2016),
  ];

  constructor() { }

  ngOnInit() {
  }

}
