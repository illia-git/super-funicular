export default function printAuthors(arr) {
	const obj = { title: '', authors: '' };
	if (arr.length === 1) {
		obj.title = 'Author:';
		obj.authors = arr[0];
	} else {
		obj.title = 'Authors:';
		obj.authors = `${arr.join(', ')}`;
	}
	return obj;
}
