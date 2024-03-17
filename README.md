# Roblox Tax Calculator
A simple npm package to calculate the tax amount for Roblox transactions. Roblox takes a 30% tax on transactions made through its platform. This package helps you quickly calculate the net amount after deducting the tax.
## Installation
You can install the Roblox Tax Calculator package via npm:

```bash
npm install roblox-tax-calculator
```
## Usage
```javascript
const calculateRobloxTax = require('roblox-tax-calculator');

const amount = 1000; // Amount in Robux
const result = calculateRobloxTax(amount);

console.log('Gross Amount:', result.grossAmount);
console.log('Tax Amount:', result.taxAmount);
console.log('Net Amount:', result.netAmount);
```

This will output:

```
Gross Amount: 1000
Tax Amount: 300
Net Amount: 700
```
## License
This project is licensed under the MIT License.