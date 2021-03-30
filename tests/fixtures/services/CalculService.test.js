const assert = require('assert');
const sinon = require('sinon');
const CalculService = require('../../../api/services/CalculService');

describe('CalculService', () => {

  describe('#addition', () => {
    it('should add values', () => {
      const result = CalculService.addition(1, 5);
      assert.equal(result,6);
    });
  });

  describe('#soustraction', () => {
    it('should substrat values', () => {
      const result = CalculService.soustraction(5, 2);
      assert.equal(result, 3);
    });
  });

  describe('#multiplication', () => {
    it('should multiply values', () => {
      const result = CalculService.multiplication(5, 2);
      assert.equal(result,10);
    });
  });

  describe('#division', () => {
    it('should divide values', () => {
      const result = CalculService.division(21, 3);
      assert.equal(result,7);
    });
    it('should not divide by 0', () => {
      try{
        CalculService.division(10, 0);
      }catch (e){
        assert(e.message, 'Division par 0 non autorisé');
        return;
      }
      assert(false);
    });
  });

  describe('#pourcentage', () => {
    it('should return pourcentage', () => {
      sinon.stub(CalculService, 'division').callsFake(() => { return 0.2;});
      sinon.stub(CalculService, 'multiplication').callsFake(() => { return 20;});
      const result = CalculService.pourcentage(2, 10);
      assert.equal(result,20);
      // Cleanup
      CalculService.multiplication.restore();
      CalculService.division.restore();
    });
    it('should call div and mul', () => {
      const spyMul = sinon.spy(CalculService, 'multiplication');
      const spyDiv = sinon.spy(CalculService, 'division');
      CalculService.pourcentage(2, 10);
      assert(spyDiv.calledOnce);
      assert(spyMul.calledImmediatelyAfter(spyDiv));
      // Cleanup
      CalculService.multiplication.restore();
      CalculService.division.restore();
    });
  });

  describe('#carre', () => {
    it('should return square', () => {
      const result = CalculService.carre(5);
      assert.equal(result,25);
    });
  });
});
