function fixPriceLabel(inputLabel) {
    var prices = inputLabel.match(/\d+/g).map(Number);
    console.log(prices);
    // for each price
    // move 1st price to new Array
    // if price is less than last price add to new array 
    // if price is bigger than last price, empty new array and add price to empty array
    // for each price in new array
    // Add 'Was £' string to 1st price
    // Add ', then £' to price
    // Add ', now £ to last price
    return inputLabel;
};
