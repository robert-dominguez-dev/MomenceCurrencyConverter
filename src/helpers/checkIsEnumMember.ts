type MemberValue = string | number;

export const checkIsEnumMember = <
	TEnum extends Record<string | number, MemberValue>,
>(
	enumBase: TEnum,
	member: MemberValue | undefined | null,
): member is TEnum[keyof TEnum] => {
	if (typeof member === 'string' || typeof member === 'number') {
		const members: (number | string)[] = Object.values(enumBase);
		return members.includes(member);
	}

	return false;
};
