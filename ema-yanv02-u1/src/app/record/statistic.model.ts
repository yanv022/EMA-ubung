import {Record} from './record.model';

export class Statistic {
  Anzahl_Erfasster_Leistungen: number ;
  Anzahl_halbe_Leistungen: number;
  durchschnittsnote: number;
  recordCount: number;
  hwCount: number;
  sumCrp: number ;
  crpToEnd: number ;
  averageGrade: number;
  constructor(noten: Record[]) {
    this.Anzahl_Erfasster_Leistungen = noten.length;
    this.Anzahl_halbe_Leistungen = noten.filter(record => record.halfWeighted).length;
    this.sumCrp = 0;
    this.durchschnittsnote = 0;
    this.hwCount = 0;
    this.crpToEnd = 180;
    this.averageGrade = 0;
    this.recordCount = noten.length;
    let gewichtcreditPoints = 0;
    this.sumCrp = 0;
    for(let i = 0; i < noten.length; i++){

      this.durchschnittsnote += (noten[i]?.grade ?? 0)  * (noten[i]?.crp ?? 0) ;
      this.sumCrp += noten[i]?.crp || 0 ;
      if(noten[i].halfWeighted){
        this.hwCount += 1;
        //pb avec le point d´interrogation
        this.averageGrade += (noten[i]?.grade?? 0) * (noten[i]?.crp ?? 0) /2 ;
        gewichtcreditPoints += noten[i]?.crp || 0 /2 ;
      }else {
        this.averageGrade += (noten[i]?.grade?? 0) * (noten[i]?.crp ?? 0) ;
        gewichtcreditPoints += noten[i]?.crp ?? 0 ;
      }
    }
    if(gewichtcreditPoints != 0) {
      this.averageGrade = Math.round(this.averageGrade / (gewichtcreditPoints));
    }else this.averageGrade = 0;
    if(this.sumCrp != 0){
      this.durchschnittsnote = this.durchschnittsnote / this.sumCrp ;
    }else this.durchschnittsnote = 0;
    this.crpToEnd = 180 - this.sumCrp ;
  }

  get averageGradeRounded(): number {
    return Math.round(this.averageGrade);
  }
  get durchschnittsnoteRounded(): number {
    return Math.round(this.durchschnittsnote);
  }
  get crpToEndRounded(): number {
    return Math.round(this.crpToEnd);
  }
  get sumCrpRounded(): number {
    return Math.round(this.sumCrp);
  }
  get hwCountRounded(): number {
    return Math.round(this.hwCount);
  }


}
