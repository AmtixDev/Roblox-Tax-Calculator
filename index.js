function calculateRobloxTax(amount) {
    const taxPercentage = 30;
    const taxAmount = (amount * taxPercentage) / 100;
    const netAmount = amount - taxAmount;
    return {
        grossAmount: amount,
        taxAmount: taxAmount,
        netAmount: netAmount
    };
}

module.exports = calculateRobloxTax;