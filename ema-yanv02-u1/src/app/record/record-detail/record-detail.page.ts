import {Component, OnInit, ViewChild} from '@angular/core';
import {Record} from '../record.model';
import {IonInput, NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {RecordService} from "../record.service";

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.page.html',
  styleUrls: ['./record-detail.page.scss'],
})
export class RecordDetailPage implements OnInit {
  @ViewChild('moduleNr')
  private moduleNrRef: IonInput | undefined;
  @ViewChild('name')
  private nameRef: IonInput | undefined;
  @ViewChild('creditpoints')
  private creditpointsRef: IonInput | undefined;
  @ViewChild('note')
  private noteRef: IonInput | undefined;


  constructor(private route: ActivatedRoute,
  private recordService: RecordService,
  private navCtrl: NavController) {
    const recordId = route.snapshot.paramMap.get('id');
    this.moduleNrRef === undefined;
    this.nameRef === undefined;
    this.creditpointsRef === undefined;
    this.noteRef === undefined;
    if (recordId) {
      this.isEditMode = true;
      Object.assign(this.record, this.recordService.findById(parseInt(recordId, 10)));
      this.pageTitle = 'Leistung bearbeiten';
    } else {
      this.pageTitle = 'Leistung erstellen';
      this.record.year = new Date().getFullYear();
    }
    // init years for ion-select
    this.initYears();

    }
  pageTitle = 'Leistung bearbeiten';
  isEditMode = false;
  record = new Record();
  recordID = 0;
  errors: Map<string, string> = new Map<string, string>();
  years: number[] = [];

  /*moduleNrChanged($event: event): void {
    this.record.moduleNr = $event.target.value
  }*/
  save() {
    this.errors.clear();
    if (!this.record.moduleNr) {
      this.errors.set('moduleNr', 'Modulnummer darf nicht leer sein!');
    }
    if (!this.record.moduleName) {
        this.errors.set('name', 'ModuleName darf nicht leer sein!');
    }
    if (!this.record.crp) {
        this.errors.set('creditpoints', 'Creditpoints darf nicht leer sein!');
    }
    // weitere Validierungen
    if (this.errors.size === 0) {
      if (this.isEditMode) {
        this.recordService.update(this.record);
      } else {
        this.recordService.persist(this.record);
      }
      this.navCtrl.pop();
    }
  }
  ionViewDidEnter() {
    if (!this.isEditMode) {
      this.moduleNrRef?.setFocus();
    }
  }
  initYears() {
    this.years =  [2009, 2010, 2011, 2012, 2013, 2014, 2015,2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  }
  deleteRecord() {
    this.recordService.delete(this.recordID);
    console.log('deleteRecord()');
  }
  ngOnInit() {
  }

}
