import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { RecordDetailPage } from './record-detail.page';

describe('RecordDetailPage', () => {
  let component: RecordDetailPage;
  let fixture: ComponentFixture<RecordDetailPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RecordDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
