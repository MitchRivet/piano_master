PianoMaster.Game = function(game){

		// define variables for Piano Master


		// var keyboard;
// 		var camera;
// 		var cKey;
// 		var map;
// 		
		this.notes = null;
	// 	var toplayer;
		var line;
		var controls;

		// var testTile;
// 		var notes;
// 		var success;
// 		var backgroundlayerkey;
// 		var toplayerkey;
// 		var currentlayer;
		var showDebug = true; 
		var notesgroup; 
		};

		PianoMaster.Game.prototype = {



				create: function() {
						//start the physics engine
						this.physics.startSystem(Phaser.Physics.ARCADE);

						//load map and tile data
						this.map = this.game.add.tilemap('fur_elise');
						this.map.addTilesetImage('blueSheet', 'blue_tiles');
						// this.map.addTilesetImage('greenSheet', 'green_tiles');
						
						//create the layers, after setting collision
						// this.success = this.map.createLayer('success');
						notes = this.map.createLayer('notes');
						notes.resizeWorld();
						
						notesgroup = this.add.group(); 
						this.map.createFromObjects('noteobjects', 4, 'object1', 0, true, false, notesgroup); 
						
						console.log(notesgroup); 
						//set the the tiles to collide within the tilemap layer (this.notes)
						this.map.setCollision(72, true, notes);
						
						//visualizes the collision tiles
						// notes.debug = true; 
						
						//set the camera position, starting at the bottom of the tile map, not the window
						this.camera.y = 6400;

						//add in the line and the keyboard, set them fixed to the camera
						line = this.add.sprite(0, 6080, 'line');
						
						//enable arcade physics on the line
						this.physics.enable(line); 
						line.body.customSeparateY = true; 
						
						//line will be stuck with the movement of the camera
						// this.line.fixedToCamera = true; 
						this.camera.follow(line); 
						 console.log(this.physics.arcade.overlap(line, notesgroup)); 
						
						// keyboard = this.add.sprite(0, 640, 'keyboard');
// 						keyboard.fixedToCamera = true;

						//link the variable cKey to the piano sound we loaded
						// cKey = this.add.audio('cKey');
// 						cKey.allowMultiple = true;

						//show the different note layers, test
						// toplayerkey = this.input.keyboard.addKey(Phaser.Keyboard.ONE);
// 						backgroundlayerkey = this.input.keyboard.addKey(Phaser.Keyboard.TWO);

						// toplayerkey.onDown.add(controller, this);
// 						backgroundlayerkey.onDown.add(controller, this);

						//link the variable cKey to the keyboard input
						// controls = this.input.keyboard.addKeys({ cKey: Phaser.Keyboard.A });
// 
// 
// 						controls.cKey.onDown.add(controller, this);
						


						//for adding notes, you may want them not snapped to the grid. you may want those to just appear opaque on the map.
						//you probably want to make an if statement to find if there is a blue note wether to turn it red, green, or yellow
						//basically, you should be able to use the same logic as a sprite hitting a block a la mario
					// 	function controller(key)
// 						{
// 								switch (key.keyCode)
// 							{
// 								case Phaser.Keyboard.A:
// 								cKey.play();
// 								newNote = this.map.putTile(1, 2, this.notes.getTileY(this.line.y), 'notes')
// 								break;
// 
// 								case Phaser.Keyboard.ONE:
// 								this.notes.alpha = 1;
// 								this.success.alpha = 0;
// 								break;
// 
// 								case Phaser.Keyboard.TWO:
// 									this.notes.alpha = 0;
// 									this.success.alpha = 1;
// 								break;
// 							}
// 
// 						}

					// console.log(notes.getTileY(line.y));

				},

					update: function()
				{
					//tell the camera to scroll up. will have to findout what these units are to sync with audio.
					//seems like its scrolling one tile per sec
					line.body.y -= 1; 
					this.physics.arcade.overlap(line, notesgroup);
					console.log(this.physics.arcade.collide(line, notes)); 
					// console.log(this.physics.arcade.overlap(line, notesgroup)); 
					
					// if (this.physics.arcade.collide(line, notes) == false) 
// 					{
// 					newNote = this.map.putTile(1, this.notes.getTileX(line.x), this.notes.getTileY(line.y), notes);
// 					}
// 					 


				},





		};

//
		// PianoMaster.item = {
// 		render: function() {
// 
// 			this.debug.spriteInfo(this.line, 32, 32);
// 		}
// // 			spawnNote: function(game){
// //
// // 				var dropPos = 615;
// // 				var dropOffset = -21;
// // 				var note = game.add.sprite(dropPos, dropOffset, 'note');
// //
// // 				game.physics.enable(note, Phaser.Physics.ARCADE);
// // 				note.inputEnabled = true;
// // 				note.events.onInputDown.add(this.clickNote, this);
// //
// // 				note.checkWorldBounds = true;
// // 				note.events.onOutOfBounds.add(this.removeNote, this);
// // 				game._noteGroup.add(note);
// // 			},
// //
// // 			clickNote: function(note) {
// // 				note.kill();
// // 				},
// //
// // 			removeNote: function(note) {
// // 				note.kill();
// // 				},
// 	};
