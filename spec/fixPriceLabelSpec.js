describe('fixPriceLabel', function() {
    it('outputs input if input is valid', function(){
        let inputLabel = 'Was £11, now £6'
        expect(fixPriceLabel(inputLabel)).toEqual(inputLabel);
      });
    
});
