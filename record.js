var Record = function(artist, title, genre, price){
	this.artist = artist;
	this.title = title;
	this.genre = genre;
	this.price = price;
}

module.exports = Record;

Record.prototype.showDetails = function(){
	return "Artist: " + this.artist + ", Title: "+ this.title + ", Genre: " + this.genre+ ", Price: " + this.price;
}