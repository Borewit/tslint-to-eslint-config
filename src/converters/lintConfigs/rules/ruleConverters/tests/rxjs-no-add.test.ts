import { convertRxjsNoAdd } from "../rxjs-no-add";

describe(convertRxjsNoAdd, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoAdd({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
