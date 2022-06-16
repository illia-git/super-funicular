export default function authorsDeHash(authorsHashed, authorsOrigin) {
	const arr = [];
	for (let i in authorsHashed)
		arr.push(authorsOrigin.find((el) => el.id === authorsHashed[i]).name);
	return arr;
}
