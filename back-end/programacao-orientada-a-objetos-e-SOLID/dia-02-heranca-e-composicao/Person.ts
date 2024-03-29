class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name
    this.birthDate = _birthDate
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('Nome deve ter no mínimo 3 caractéres')
    }

    this._name = value
  }

  get birthDate() {
    return this._birthDate;
  }

  getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs)
  }

  set birthDate(value: Date) {
    if(value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data futura')
    } if (this.getAge(value) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos')
    }

    this._birthDate = value
  }
}

export {Person};