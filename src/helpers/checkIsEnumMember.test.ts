import { checkIsEnumMember } from './checkIsEnumMember';

type TestCase = {
	description: string;
	input: {
		enumBase: any;
		member: number | string | undefined | null;
	};
	expectedOutput: boolean;
};

enum NumericEnum {
	Address = 1,
	Parcel = 2,
}

enum StringEnum {
	A = 'A',
	B = 'B',
}

const constEnumLike = {
	One: 1,
	Two: 2,
	Name: 'NAME',
} as const;

const testCases: TestCase[] = [
	{
		description: 'returns false for undefined member',
		input: { enumBase: NumericEnum, member: undefined },
		expectedOutput: false,
	},
	{
		description: 'returns false for undefined member',
		input: { enumBase: NumericEnum, member: null },
		expectedOutput: false,
	},
	{
		description: 'returns true for numeric enum member value (1)',
		input: { enumBase: NumericEnum, member: 1 },
		expectedOutput: true,
	},
	{
		description: 'returns false for number not in numeric enum (3)',
		input: { enumBase: NumericEnum, member: 3 },
		expectedOutput: false,
	},
	{
		description:
			"returns true for numeric enum reverse mapping string ('Address')",
		input: { enumBase: NumericEnum, member: 'Address' },
		expectedOutput: true,
	},
	{
		description: "returns false for unrelated string in numeric enum ('Nope')",
		input: { enumBase: NumericEnum, member: 'Nope' },
		expectedOutput: false,
	},
	{
		description: "returns true for string enum member value ('A')",
		input: { enumBase: StringEnum, member: 'A' },
		expectedOutput: true,
	},
	{
		description: "returns false for string not in string enum ('C')",
		input: { enumBase: StringEnum, member: 'C' },
		expectedOutput: false,
	},
	{
		description: 'returns true for plain object enum-like numeric value (2)',
		input: { enumBase: constEnumLike, member: 2 },
		expectedOutput: true,
	},
	{
		description:
			"returns true for plain object enum-like string value ('NAME')",
		input: { enumBase: constEnumLike, member: 'NAME' },
		expectedOutput: true,
	},
	{
		description: "returns false for plain object enum-like string key ('One')",
		input: { enumBase: constEnumLike, member: 'One' },
		expectedOutput: false,
	},
];

describe('checkIsEnumMember', () => {
	it.each(testCases)('$description', ({ input, expectedOutput }) => {
		expect(checkIsEnumMember(input.enumBase, input.member)).toBe(
			expectedOutput,
		);
	});
});
