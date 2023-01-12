import { Person } from "./Person";

class Students extends Person {
  private _enrollment: string;
  private _examsGrade: number[];
  private _assignmentsGrade: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate) 
      this._examsGrade = [];
      this._assignmentsGrade = [];
      this._enrollment = this.generateEnrollment()
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matricula deve ter no miínimo 16 caractéres')
    this._enrollment = value
  }

  get examsGrades(): number[] {
    return this._examsGrade;
  }

  set examsGrades(value: number[]) {
    if(value.length !== 4) {
      throw new Error('A pessoa estudante deve possuir exatas 4 notas de provas')
    }

    this._examsGrade = value;
  }

  get assignmentGrades(): number[] {
    return this._assignmentsGrade;
  }

  set assignmentGrades(value: number[]) {
    if(value.length !== 2) {
      throw new Error('A pessoa estudante deve possuir exatas 2 notas de trabalho')
    }

    this._assignmentsGrade = value
  }

  sum(): number {
    return [...this._examsGrade, ...this._assignmentsGrade].reduce((acc, cur) => {
      const total = cur + acc;

      return total;
    }, 0)
  }

  finalGrade(): number {
    const notasTotal = this.sum();
    const divisor = this._examsGrade.length + this._assignmentsGrade.length;

    return Math.round(notasTotal / divisor);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() +1)).replace(/\W/g, '') 
    return `STU${randomStr}`
  }
}

export {Students};