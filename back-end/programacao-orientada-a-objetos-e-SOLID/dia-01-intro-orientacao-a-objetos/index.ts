class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = [];
    this._notasTrabalho = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve conter ao menos 3 caracteres');
    }

    this._nome = value
  }

  get notasProva(): number[] {
    return this._notasProva;
  }

  set notasProva(value: number[]) {
    if(value.length !== 4) {
      throw new Error('A pessoa estudante deve possuir exatas 4 notas de provas')
    }

    this._notasProva = value;
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }

  set notasTrabalho(value: number[]) {
    if(value.length !== 2) {
      throw new Error('A pessoa estudante deve possuir exatas 2 notas de trabalho')
    }

    this._notasTrabalho = value
  }

  soma(): number {
    return [...this._notasProva, ...this._notasTrabalho].reduce((acc, cur) => {
      const total = cur + acc;

      return total;
    }, 0)
  }

  media(): number {
    const notasTotal = this.soma();
    const divisor = this._notasProva.length + this._notasTrabalho.length;

    return Math.round(notasTotal / divisor);
  }
}

const pessoa1 = new Estudante('mtr-0001', 'Helton')

console.log(pessoa1);