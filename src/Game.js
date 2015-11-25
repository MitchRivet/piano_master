PianoMaster.Game = function(game){
		
		// define variables for Piano Master
		

		var keyboard; 
		var camera; 
		var cKey; 
		var map; 
		var backgroundlayer;  
		var line; 
		
		}; 
		
		PianoMaster.Game.prototype = {
				
				
				
				create: function() {
						

						
						this.map = this.game.add.tilemap('fur_elise'); 
						this.map.addTilesetImage('blueSheet', 'blue_tiles'); 
						this.map.addTilesetImage('greenSheet', 'green_tiles'); 
				
						this.backgroundlayer = this.map.createLayer('notes'); 
						this.backgroundlayer.resizeWorld(); 
						
						this.camera.y = 6400; 
// 						layer.wrap = true; 
						
						line = this.add.sprite(0, 352, 'line'); 
						line.fixedToCamera = true; 
						
						keyboard = this.add.sprite(0, 640, 'keyboard'); 
						keyboard.fixedToCamera = true; 
						

					},  
					
	update: function() {
				
				this.camera.y -= 1; 
				} 
				
		}; 
		
// 		PianoMaster.item = {
// 			spawnNote: function(game){
// 			
// 				var dropPos = 615; 
// 				var dropOffset = -21; 
// 				var note = game.add.sprite(dropPos, dropOffset, 'note');  
// 				
// 				game.physics.enable(note, Phaser.Physics.ARCADE); 
// 				note.inputEnabled = true; 
// 				note.events.onInputDown.add(this.clickNote, this); 
// 				
// 				note.checkWorldBounds = true; 
// 				note.events.onOutOfBounds.add(this.removeNote, this); 
// 				game._noteGroup.add(note);  
// 			},  
// 			
// 			clickNote: function(note) {
// 				note.kill(); 
// 				}, 
// 				
// 			removeNote: function(note) {
// 				note.kill(); 
// 				},  
// 	};
// 			