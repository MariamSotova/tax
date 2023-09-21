import { calculateNetMonthIncome } from "./script";

describe("calculateNetMonthIncome", () => {
  it("returns expected value for low", () => {
    expect(calculateNetMonthIncome(35129)).toBe(2650.78);
  });

  it("returns expected value for middle", () => {
    expect(calculateNetMonthIncome(68500)).toBe(4399.97);
  });

  it("returns expected value for hight", () => {
    expect(calculateNetMonthIncome(68600)).toBe(4404.25);
  });
});
