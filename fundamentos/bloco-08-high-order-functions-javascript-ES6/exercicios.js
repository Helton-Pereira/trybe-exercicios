const generateEmail = (nome) => {
    return `${nome.toLowerCase().replace(' ', '_')}@trybe.com`
}

const createEmployee = (nome) => {
    const employee = {
        nomeCompleto: nome,
        email: generateEmail(nome),
    }
    return employee;
}




const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    }
    return employees;
  };
