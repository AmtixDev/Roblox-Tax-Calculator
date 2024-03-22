# roblox-tax-calculator
A simple npm package to calculate the tax amount for Roblox transactions. Roblox takes a 30% tax on transactions made through its platform. This package helps you quickly calculate the net amount after deducting the tax.
## Installation
To install roblox-tax-calculator, simply run the following npm command:
```bash
npm install roblox-tax-calculator
```
## Usage
Using roblox-tax-calculator is straightforward. Here's an example of how to use it in your JavaScript code:
```javascript
const calculateRobloxTax = require('roblox-tax-calculator');

// Calculate tax for a given amount
const taxInfo = calculateRobloxTax(1000);

console.log(taxInfo);
/*
Output:
{
    grossAmount: 1000,
    taxAmount: 300,
    netAmount: 700,
    remittanceAmount: 300
}
*/
```

The `calculateRobloxTax` function takes the transaction amount as input and returns an object with detailed tax information:

- `grossAmount`: The original transaction amount.
- `taxAmount`: The calculated tax amount based on the default tax rate of 30%.
- `netAmount`: The net amount after deducting the tax.
- `remittanceAmount`: The amount that must be remitted as tax.
## License
This project is licensed under the MIT License.
## Contact?
You can join my [Discord Community](https://discord.gg/FJJXuDXME8) server or DM me [HERE](https://discord.com/users/246354195979042817) .
