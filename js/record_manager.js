function RecordManager() {
  this.clear();
}

RecordManager.prototype.addMove = function(move) {
	this.moves.push(move);
}

RecordManager.prototype.getMove = function() {
	var move = this.movel.pop();
	return move;
}

RecordManager.prototype.addTile = function(tile) {
	this.tiles.push(tile.serialize());
}

RecordManager.prototype.getTile = function() {
	var tile = this.tilel.pop();
	if (tile) {
		return new Tile(tile.position,tile.value);
	}
	
	return null;
}

RecordManager.prototype.clear = function() {
	this.moves = [];
	this.tiles = [];
	this.movel = [];
	this.tilel = [];
}

RecordManager.prototype.load = function(moves,tiles) {
	this.moves = moves;
	this.tiles = tiles;
}

RecordManager.prototype.startReplay = function(moves,tiles) {
	var t = this.moves.pop();
	while (typeof t !== 'undefined') {
		this.movel.push(t);
		t = this.moves.pop();
	}
	
	t = this.tiles.pop();
	while (typeof t !== 'undefined') {
		this.tilel.push(t);
		t = this.tiles.pop();
	}
}

RecordManager.prototype.serialize = function() {
	return {
		moves: this.moves,
		tiles: this.tiles
	}
}