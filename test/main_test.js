var expect = require('chai').expect;



// describe('checkForShip', function(){
// 	var checkForShip = require('../game_logic/ship_methods').checkForShip;
//
// 	var player;
//
// 	before(function(){
// 		player = {
// 			ships: [
// 				{
// 					locations: [[0, 0], [0, 1]]
// 				},
// 				{
// 					locations: [[1, 0], [1, 1]]
// 				},
// 				{
// 					locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
// 				}
// 			]
// 		};
//
// 	});
//
// 	it('should correctly report no ship at a given players coordinate', function(){
//
// 		expect(checkForShip(player, [9, 9])).to.be.false
// 	});
//
// 	it('should correctly resport a ship located at the given coordinates', function(){
//
// 		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
// 	});
//
// 	it('should handle ships located at more than one coordinate', function () {
//
// 		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
// 		expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
// 		expect(checkForShip(player, [9, 9])).to.be.false;
//
// 	});
//
// 	it('should handle checking multiple ships', function () {
//
// 		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
// 		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
// 		expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
// 		expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
// 		expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
// 		expect(checkForShip(player, [9, 9])).to.be.false;
//
// 	});
//
// });
//
// describe('damageShip', function(){
//
// 	var damageShip = require('../game_logic/ship_methods').damageShip;
//
//
// 	it('should register damage on a given ship at a given location', function () {
//
// 		var ship = {
// 			location: [[0, 0]],
// 			damage: []
// 		};
//
// 		damageShip(ship, [0, 0]);
// 		expect(ship.damage).not.to.be.empty;
// 		expect(ship.damage[0]).to.deep.equal([0, 0]);
// 	});
//
// });
//
// describe('fireShot', function(){
//
// 	var fireShot = require('../game_logic/ship_methods').fireShot;
// 	var player;
//
// 	beforeEach(function(){
// 		player = {
// 			ships: [
// 				{
// 					locations : [[0, 0]],
// 					damage: []
// 				}
// 			]
// 		};
// 	});
//
// 	it('should log damage if a ship is located at a given coordinate', function () {
//
// 		fireShot(player, [0, 0]);
// 		expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
// 	});
//
// 	it('should not log damage if a ship is located at a given coordinate', function () {
//
// 		fireShot(player, [9, 9]);
// 		expect(player.ships[0].damage).to.be.empty;
// 	});
//
// });
