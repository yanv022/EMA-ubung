export class Record{
  id: number ;
  moduleNr: string ;
  moduleName: string ;
  crp: number ;
  grade: number ;
  halfWeighted: boolean ;
  summerTerm: boolean ;
  year: number ;
  constructor(id: number, moduleNr: string, moduleName: string, crp: number, grade: number, halfWeighted: boolean, summerTerm: boolean, year: number) {
    this.id = id;
    this.moduleNr = moduleNr;
    this.moduleName = moduleName;
    this.crp = crp;
    this.grade = grade;
    this.halfWeighted = halfWeighted;
    this.summerTerm = summerTerm;
    this.year = year;
  }


}
