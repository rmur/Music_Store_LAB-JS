var assert = require("assert");
var RecordShop = require("../recordShop.js")
var Record = require("../record.js")
var RecordCollector = require("../recordCollector.js")

describe("Shop Task", function(){

beforeEach(function(){
	store1 = new RecordShop("Romans Store", "Edinburgh");
	record1 = new Record("Justin Beiber", "Baby", "Pop", 5);
	record2 = new Record("Meatloaf", "Bat out of Hell", "Rock", 10);
	record3 = new Record("Prodigy", "Smack my bitch up!", "Dance", 8);
	collector1 = new RecordCollector(9);
	store1.addRecord(record1);
	store1.addRecord(record2);
	store1.addRecord(record3);

})

	it("add record to store", function(){
		assert.strictEqual(store1.inventory.length,3);
	})

	it("print out records props as string", function(){
		assert.strictEqual(record1.showDetails(), "Artist: Justin Beiber, Title: Baby, Genre: Pop, Price: 5");
	})

	it("print inventory", function(){
		assert.deepEqual(store1.listInventory(),[record1, record2, record3])
	})

	it("test sell record", function(){
		store1.sellRecord(record3);
		assert.strictEqual(store1.balance, 8);
		assert.deepEqual(store1.listInventory(),[record1,record2]);
	})

	it("test financial situation", function(){
		assert.strictEqual(store1.finSit(), "Balance: 0, Inventory Value: 23")
	})

	it("test show records by genre", function(){
		assert.deepEqual(store1.recordByGenre("Pop"), [record1]);
	})

	it("test has money", function(){
		assert.strictEqual(collector1.balance, 9);
	})

	it("test cannot buy when cannot afford", function(){
		assert.strictEqual(collector1.buyRecord(store1, record2), "Can't buy")
	})

	it("test buy record", function(){
		collector1.buyRecord(store1, record1)
		assert.deepStrictEqual(collector1.collection, [record1])
		assert.strictEqual(store1.balance, 5);
		assert.deepEqual(store1.listInventory(),[record2,record3]);	})



})