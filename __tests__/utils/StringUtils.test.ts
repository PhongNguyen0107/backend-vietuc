const {isVietnameseText} = require("../../src/utils/StringUtils")
describe("StringUtils testing:", () => {
  describe("isVietnameseText function testing:", () => {

    test("isVietnameseText => Data type:", () => {
      expect(isVietnameseText(0)).toBe(false)
    })
    test("isVietnameseText => Not pass parram:", () => {
      expect(isVietnameseText()).toBe(false)
    })
    test("isVietnameseText => Happy case:", () => {
      expect(isVietnameseText("Tiếng việt")).toBe(false)
      expect(isVietnameseText("English")).toBe(true)
    })
    test("isVietnameseText => Fail case:", () => {
      expect(isVietnameseText("English")).toBe(true)
    })
  })

})