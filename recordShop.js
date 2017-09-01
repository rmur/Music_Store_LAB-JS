var RecordShop = function(name, city){
	this.name = name;
	this.city = city;
	this.inventory = [];
	this.balance = 0;
}

RecordShop.prototype.addRecord = function(record){
		this.inventory.push(record);
}

RecordShop.prototype.listInventory = function(){
	return this.inventory;
}



RecordShop.prototype.sellRecord = function(record){
	var indexOfrecord = this.inventory.indexOf(record);
	this.inventory.splice(indexOfrecord,1);
	this.balance += record.price;
}

RecordShop.prototype.finSit = function(){
	var invValue = this.inventory.reduce(function(accumulator, record){
		return (accumulator + record.price)
	}, 0);
	return ("Balance: " + this.balance + ", Inventory Value: " + invValue);
}

RecordShop.prototype.recordByGenre = function(genre){
	return this.inventory.filter(function(record){
		return genre === record.genre;
	})
}

module.exports = RecordShop;