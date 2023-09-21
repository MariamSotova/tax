// расчет суммы налога за год

const taxIntervals = [
  { maxValue: 35129, rate: 9.45 },
  { maxValue: 68507, rate: 37.1 },
  { maxValue: Number.MAX_SAFE_INTEGER, rate: 49.5 },
];

export function calculateNetMonthIncome(yearIncome: number): number {
  let tax = 0;
  let taxableIncome = 0;

  for (let i = 0; i < taxIntervals.length; i++) {
    const { maxValue, rate } = taxIntervals[i];

    const isFinalInterval = maxValue >= yearIncome;

    const currentTaxableIncome = isFinalInterval ? yearIncome : maxValue;

    tax += ((currentTaxableIncome - taxableIncome) * rate) / 100;
    taxableIncome = currentTaxableIncome; // сохр с кажд циклом число

    if (isFinalInterval) {
      break;
    }
  }

  const netMonthIncome = (yearIncome - tax) / 12;

  return Number.parseFloat(netMonthIncome.toFixed(2));
}
// 90000 = 35129 (9.45%) + 33378 (37.10%) + 21493 (49.50%)

// 68600 = 35129 (9.45%) + 33378 (37.10%) + 93 (49.50%)

// 20000
// 1 isFinalInterval = true -> currentTaxableIncome = 20000 -> (20000 - 0) * 9.45 -> +tax
// end

// 40000
// 1 isFinalInterval = false -> currentTaxableIncome = 35129 -> (35129 - 0) * 9.45 -> +tax
// 2 isFinalInterval = true -> currentTaxableIncome = 40000 -> (40000 - 35129) * 37.1 -> +tax
// end

// 80000
// 1 isFinalInterval = false -> currentTaxableIncome = 35129 -> (35129 - 0) * 9.45 -> +tax
// 2 isFinalInterval = false -> currentTaxableIncome = 68507 -> (68507 - 35129) * 37.1 -> +tax
// 3 isFinalInterval = true -> currentTaxableIncome = 80000 -> (80000 - 68507) * 49.5 -> +tax
