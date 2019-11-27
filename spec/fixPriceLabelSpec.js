describe('FixPriceLabel', function() {
    it('outputs input if input is valid', function(){
      let inputLabel = 'Was £11, now £6'
      expect(FixPriceLabel(inputLabel)).toEqual(inputLabel);
    });
    it('corrects label if not valid', function(){
      let inputLabel = 'Was £10, then £8, then £11, now £6'
      let outputLabel = 'Was £11, now £6'
      expect(FixPriceLabel(inputLabel)).toEqual(outputLabel);
    });
});
