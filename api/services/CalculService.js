const CalculService = require('./CalculService');
module.exports = {

  addition : (a, b) => {
    return a+b;
  },

  soustraction : (a, b) => {
    return a-b;
  },

  multiplication : (a, b) => {
    return a*b;
  },

  division : (a, b) => {
    if(b === 0){
      throw new Error('Division par 0 non autorisé');
    }
    return a/b;
  },

  pourcentage: (a, b) => {
    const c = CalculService.division(a, b);
    return CalculService.multiplication(c, 100);
  },

  carre: (a) => {
    return CalculService.multiplication(a, a);
  }

};
