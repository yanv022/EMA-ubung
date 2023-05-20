import { Component, OnInit } from '@angular/core';
import {Record} from '../record.model';
import {Statistic} from '../statistic.model';
import {RecordService} from "../record.service";
import {Router} from '@angular/router';

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
  public handlerMessage = 'Neues Modul';
  public roleMessage = 'Bitte geben Sie die Daten ein';
  public textContent = [
    {
      placeholder: 'Module Nr.',
    },
    {
      placeholder: 'Name',
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
    {
      type: 'checkbox',
    },
  ];
  pageTitle = 'Leistungen';

  constructor(private recordService: RecordService,
              private router: Router) {
    this.records = recordService.findAll();
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
    //RecordService.persist(new Record(5, 'CS1021', 'Software Engineering', 6, 92, false, false, 2017));
    this.recordService.persist(new Record(9, 'CS1027', 'Software Engineering', 6, 92, false, false, 2017));
    this.router.navigate(['record-detail']);
  }
  editRecord(record: Record) {
    this.router.navigate(['record-detail', {id: record.id}]);
  }

  test() {
    this.recordService.update(new Record(9, 'CS1047', 'daata haus', 6, 73, true, true, 2016));
  }
  delete() {
    this.recordService.delete(5);
  }
}
