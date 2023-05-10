export class Record {
  [key: string]: any;
  id?: number | null;
  moduleNr?: string;
  moduleName?: string;
  crp?: number;
  grade?: number;
  halfWeighted?: boolean;
  summerTerm?: boolean;
  year?: number;

  constructor(
    id?: number | null,
    moduleNr?: string,
    moduleName?: string,
    crp?: number,
    grade?: number,
    halfWeighted?: boolean,
    summerTerm?: boolean,
    idx?: number
  ) {
    this.id = id || null;
    this.moduleNr = moduleNr || '';
    this.moduleName = moduleName || '';
    this.crp = crp || 0;
    this.grade = grade || 0;
    this.halfWeighted = halfWeighted || false;
    this.summerTerm = summerTerm || false;
    this.year = 2000 + Number(idx);
  }
}
