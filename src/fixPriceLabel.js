function FixPriceLabel(inputLabel) {
    let prices = inputLabel.match(/\d+/g).map(Number);
    let lastPrice = 0;

    // for each price
    let validPrices = [];
    prices.forEach(validatePrices);

    function validatePrices(price, index) {
        // move 1st price to new Array
        if (index == 0) { lastPrice = price;  validPrices.push(price) };
        // if price is less than last price add to new array 
        if (lastPrice > price) { lastPrice = price;  validPrices.push(price) }
        // if price is bigger than last price, empty new array and add price to empty array
        if (lastPrice < price) { lastPrice = price;  validPrices = []; validPrices.push(price) }
    };

    outputLabel = '';
    // for each price in new array
    validPrices.forEach(createOutputString);
    function createOutputString(price, index) {
        // Add 'Was £' string to 1st price
        if (index == 0) { outputLabel = `Was £${price}`}
        // Add ', now £ to last price
        if (index == validPrices.length - 1) { outputLabel = outputLabel + `, now £${price}`}
        // Add ', then £' to price
    };
    
    return outputLabel;
};
