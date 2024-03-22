function calculateRobloxTax(amount) {
    const taxPercentage = 30;
    const taxAmount = (amount * taxPercentage) / 100;
    const netAmount = amount - taxAmount;
    const remittanceAmount = taxAmount;
    return {
        grossAmount: amount,
        taxAmount: taxAmount,
        netAmount: netAmount,
        remittanceAmount: remittanceAmount
    };
}

module.exports = calculateRobloxTax;
