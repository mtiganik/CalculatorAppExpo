import Calculator from "../util/calculator";


test("Empty input returns empty result", () => {
  expect(Calculator("")).toEqual(["", ""]);
});

test("A number returns no result", () => {
  expect(Calculator("2")).toEqual(["2", ""])
})

test("Multi digit number returns no result", () => {
  expect(Calculator("22")).toEqual(["22", ""])
})

test("Operator in end returns no result", () => {
  expect(Calculator("22+")).toEqual(["22+",""])
})

test("Multi operators remove last operator", () => {
  expect(Calculator("22++")).toEqual(["22+", ""])
})

test("Valid formula gives valid result", () => {
  expect(Calculator("22+2")).toEqual(["22+2", 24])
})

test("Valid formula gives valid result, second number bigger that 10", () => {
  expect(Calculator("22+14")).toEqual(["22+14", 36])
})

test("Subtraction example", () => {
  expect(Calculator("22-10")).toEqual(["22-10"], 12)
})