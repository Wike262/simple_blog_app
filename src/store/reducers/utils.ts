import { Article } from '../../types';

export function updateItemInArray(array: Array<Article>, articleSlug: string, updateItemCallback: Function) {
	const updatedItems = array.map((item: Article) => {
		if (item.slug !== articleSlug) {
			return item;
		}
		const updatedItem = updateItemCallback(item);
		return updatedItem;
	});

	return updatedItems;
}

export function updateObject(oldObject: {}, newValues: {}) {
	return Object.assign({}, oldObject, newValues);
}
