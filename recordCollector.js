var RecordCollector = function(balance){
	this.balance = balance;
	this.collection = []
}

RecordCollector.prototype.buyRecord = function(store, record){
	if (record.price > this.balance){
		return "Can't buy";
	} else {
		store.sellRecord(record);
		this.collection.push(record);
	}
}

module.exports = RecordCollector;