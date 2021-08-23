

export class MyCart {
	#items;
	constructor() {
		this.items = new Map();
	}

	add(item) {

		if ( ! (
			('nbr' in item) &&
			('name' in item) &&
			('price' in item)
		) )
			return 'No param';
		let key = this.hash(item);
		let cart = this.items.get(key);
		if (cart) {
			item.nbr += cart.nbr
		}
		
		this.items.set(key, item);
	}

	hash(item) {

		return item.name + item.price;
	}

	delete(item) {

		let key = this.hash(item);
		delete this.items.delete(key);
		return true;
	}

	update(item) {

		let key = this.hash(item);
		this.items.set(key, item)
	}

	map() {
		return Object.values(this.items)
	}

	getTotal() {
		let items = this.map();
		let total = 0;
		for(let item of items) {
			total += item.price * item.nbr
		}
		return total
	}
}