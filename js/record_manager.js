function RecordManager() {
  this.moves = [];
  this.tiles = [];
}

RecordManager.prototype.addMove = function(move) {
	this.moves.push(move);
}

RecordManager.prototype.getMove = function() {
	var move = this.moves.shift();
	return move;
}

RecordManager.prototype.addTile = function(tile) {
	this.tiles.push(tile.serialize());
}

RecordManager.prototype.getTile = function() {
	var tile = this.tiles.shift();
	if (tile) {
		return new Tile(tile.position,tile.value);
	}
	
	return null;
}

RecordManager.prototype.clear = function() {
	this.moves = [];
	this.tiles = [];
}

RecordManager.prototype.load = function(moves,tiles) {
	this.moves = moves;
	this.tiles = tiles;
}

RecordManager.prototype.serialize = function() {
	return {
		moves: this.moves,
		tiles: this.tiles
	}
}