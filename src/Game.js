PianoMaster.Game = function(game){
		
		// define variables for Piano Master
		
		this._noteGroup = null; 
		this._spawnNoteTimer = 0;  
		
		var cKey; 
		
		
		}; 
		
		PianoMaster.Game.prototype = {
				create: function() {
						
				// 		cKey = game.input.keyboard.addKey(Phaser.Keyboard.A); 
// 						cKey.onDown.
						this.physics.startSystem(Phaser.Physics.ARCADE); 
						
						this.physics.arcade.gravity.y = 200; 
						
						this.add.sprite(0, 640, 'keyboard'); 
						
						this._spawnNoteTimer = 0; 
						
						this._noteGroup = this.add.group(); 
						
						PianoMaster.item.spawnNote(this); 
					},  
					
				update: function() {
				
				this._spawnNoteTimer += this.time.elapsed; 
				
				if(this._spawnNoteTimer > 1000) {
						
						this._spawnNoteTimer = 0; 
						
						PianoMaster.item.spawnNote(this); 
					} 
				} 
				
		}; 
		
		PianoMaster.item = {
			spawnNote: function(game){
			
				var dropPos = 615; 
				var dropOffset = -21; 
				var note = game.add.sprite(dropPos, dropOffset, 'note');  
				
				game.physics.enable(note, Phaser.Physics.ARCADE); 
				note.inputEnabled = true; 
				note.events.onInputDown.add(this.clickNote, this); 
				
				note.checkWorldBounds = true; 
				note.events.onOutOfBounds.add(this.removeNote, this); 
				game._noteGroup.add(note);  
			},  
			
			clickNote: function(note) {
				note.kill(); 
				}, 
				
			removeNote: function(note) {
				note.kill(); 
				},  
	};
			