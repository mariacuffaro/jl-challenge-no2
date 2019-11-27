## Challenge #2
This challenge requires correcting a string containing a label showing pricing information for reduced-to-clear items. The format of the label is “Was £a, then £b, then £c, now £d”. The label is only correct if a > b > c > d. Unfortunately extravaganza price matching activity can cause prices to be temporarily reduced and then raised again. There is another glitch in the system that creates the label string that can cause prices to be set higher than the original prices.

For examples of incorrect labels include:

```
“Was £10, then £8, then £11, now £6”. This should be “Was £11, now £6”.

“Was £10, then £8, then £8, now £6”. This should be “Was £10, then £8, now £6”

“Was £10, then £6, then £4, now £8”. This should be “Was £10, now £8”.
```
A new function called fixPriceLabel() which accepts a string containing a price label and writes out a string containing a valid price label needs to be created. The business rules are:
```
A price must be removed from the label if it is bigger or equal to a previous price or smaller or equal to a later price. Work from left to right. So if the “was” price is smaller than the “now” price then discard the “was” price. Prices in the original label can be formatted as integer or two digit decimal. e.g. £99 or £99.50. Preserve the original price format in the output. The initial price in the label must be prefixed with “was” and the last price prefixed with now and all other prices prefixed with “then”. If there is only one price prefix it with “now”.

The input string will always contain a label which is valid apart from containing invalid prices so don’t add code to validate anything except the prices.

Use local conventions for naming the function e.g. fix-price-label() if your language doesn’t use camel case.

For languages that require wrapping functions in classes, such as Java, please call the class “Challenge2”.
```
## To run this code
```
Clone this repository
cd to the folder containing this project 
type 'open SpecRunner.html' from the command line to run tests
```