import { hello } from "./App";

describe("Hello", () => {
	it("Should return Hello World!", () => {
		expect(hello()).toBe("Hello World!");
	});
})