PianoMaster.MainMenu = function(game){}; 
PianoMaster.MainMenu.prototype = {

		create: function() {
			 
			 //new button(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) 
			 this.add.button(PianoMaster.GAME_WIDTH-401-10, PianoMaster.GAME_HEIGHT-143-10, 'button-start', this.startGame, this, 1, 0, 2); 
			 }, 
			 
			 startGame: function() {
			 	this.state.start('Game'); 
				
			 } 
		};