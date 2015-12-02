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
						this.map.addTilesetImage('greenSheet', 'green_tiles');
						
						//create the layers, after setting collision
						this.success = this.map.createLayer('success');
						notes = this.map.createLayer('notes');
						notes.resizeWorld();
						
						notesgroup = this.add.group(); 
						this.map.createFromObjects('noteobjects', 4, 'object1', 0, true, false, notesgroup); 
						
						console.log(notesgroup); 
						//set the the tiles to collide within the tilemap layer (this.notes)
						this.map.setCollision(72, true, notes);
						
						//visualizes the collision tiles
						notes.debug = true; 
						console.log(notes.debug);
						//set the camera position, starting at the bottom of the tile map, not the window
						this.camera.y = 6400;

						//add in the line and the keyboard, set them fixed to the camera
						grid1 = this.add.sprite(32, 6080, 'grid_collide');
						grid2 = this.add.sprite(64, 6080, 'grid_collide'); 
						grid3 = this.add.sprite(96, 6080, 'grid_collide'); 
						grid4 = this.add.sprite(128, 6080, 'grid_collide'); 
						grid5 = this.add.sprite(160, 6080, 'grid_collide'); 
						grid6 = this.add.sprite(192, 6080, 'grid_collide'); 
						grid7 = this.add.sprite(224, 6080, 'grid_collide'); 
						grid8 = this.add.sprite(256, 6080, 'grid_collide'); 
						grid9 = this.add.sprite(288, 6080, 'grid_collide'); 
						grid10 = this.add.sprite(320, 6080, 'grid_collide'); 
						grid11 = this.add.sprite(352, 6080, 'grid_collide'); 
						grid12 = this.add.sprite(384, 6080, 'grid_collide'); 
						grid13 = this.add.sprite(416, 6080, 'grid_collide'); 
						grid14 = this.add.sprite(448, 6080, 'grid_collide'); 
						grid15 = this.add.sprite(480, 6080, 'grid_collide'); 
						grid16 = this.add.sprite(512, 6080, 'grid_collide'); 
						grid17 = this.add.sprite(544, 6080, 'grid_collide'); 
						grid18 = this.add.sprite(576, 6080, 'grid_collide'); 
						
						
						//enable arcade physics on the line
						this.physics.enable(grid1);
						this.physics.enable(grid2); 
						this.physics.enable(grid3); 
						this.physics.enable(grid4);
						this.physics.enable(grid5);
						this.physics.enable(grid6);
						this.physics.enable(grid7);
						this.physics.enable(grid8);
						this.physics.enable(grid9);
						this.physics.enable(grid10);
						this.physics.enable(grid11);
						this.physics.enable(grid12);
						this.physics.enable(grid13);
						this.physics.enable(grid14);
						this.physics.enable(grid15);
						this.physics.enable(grid16);
						this.physics.enable(grid17);
						this.physics.enable(grid18); 
						
				
						
						//don't think we need any of these
					// 	grid16.body.checkCollision.left = false; 
// 						// grid16.body.checkCollision.right = false;
// 			
// 						grid17.body.checkCollision.left = false; 
// 						grid17.body.checkCollision.right = false; 
						
						grid1.body.customSeparateY = true;
						grid2.body.customSeparateY = true; 
						grid3.body.customSeparateY = true;
						grid4.body.customSeparateY = true;
						grid5.body.customSeparateY = true;
						grid6.body.customSeparateY = true;
						grid7.body.customSeparateY = true;
						grid8.body.customSeparateY = true;
						grid9.body.customSeparateY = true;
						grid10.body.customSeparateY = true;
						grid11.body.customSeparateY = true;
						grid12.body.customSeparateY = true;
						grid13.body.customSeparateY = true;
						grid14.body.customSeparateY = true;
						grid15.body.customSeparateY = true;
						grid16.body.customSeparateY = true;
						grid17.body.customSeparateY = true;
						grid18.body.customSeparateY = true;
						
						//line will be stuck with the movement of the camera
						// this.line.fixedToCamera = true; 
						this.camera.follow(grid1); 
						
						
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

						
				},

					update: function()
				{
					//tell the camera to scroll up. will have to findout what these units are to sync with audio.
					//seems like its scrolling one tile per sec
					grid1.body.y -= 1; 
					grid2.body.y -= 1;
					grid3.body.y -= 1;
					grid4.body.y -= 1;
					grid5.body.y -= 1;
					grid6.body.y -= 1;
					grid7.body.y -= 1;
					grid8.body.y -= 1;
					grid9.body.y -= 1;
					grid10.body.y -= 1;
					grid11.body.y -= 1;
					grid12.body.y -= 1;
					grid13.body.y -= 1;
					grid14.body.y -= 1;
					grid15.body.y -= 1;
					grid16.body.y -= 1;
					grid17.body.y -= 1;
					grid18.body.y -= 1;
					
					console.log(this.input.keyboard.isDown(Phaser.Keyboard.DOUBLEQUOTE)); 
					
				if (this.physics.arcade.collide(grid1, notes) && this.input.keyboard.isDown(Phaser.Keyboard.A)) 
					{ 
				
					newNote = this.map.putTile(1, notes.getTileX(grid1.x), notes.getTileY(grid1.y - 16), notes);
					}
					
					if (this.physics.arcade.collide(grid2, notes) && this.input.keyboard.isDown(Phaser.Keyboard.W)) 
					{ 
					
					newNote = this.map.putTile(1, notes.getTileX(grid2.x), notes.getTileY(grid2.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid3, notes) && this.input.keyboard.isDown(Phaser.Keyboard.S)) 
					{ 
					
					newNote = this.map.putTile(1, notes.getTileX(grid3.x), notes.getTileY(grid3.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid4, notes) && this.input.keyboard.isDown(Phaser.Keyboard.E)) 
					{ 
					
					newNote = this.map.putTile(1, notes.getTileX(grid4.x), notes.getTileY(grid4.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid5, notes) && this.input.keyboard.isDown(Phaser.Keyboard.D)) 
					{ 
					
					newNote = this.map.putTile(1, notes.getTileX(grid5.x), notes.getTileY(grid5.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid6, notes) && this.input.keyboard.isDown(Phaser.Keyboard.F)) 
					{ 
				
					newNote = this.map.putTile(1, notes.getTileX(grid6.x), notes.getTileY(grid6.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid7, notes) && this.input.keyboard.isDown(Phaser.Keyboard.T)) 
					{ 
				
					newNote = this.map.putTile(1, notes.getTileX(grid7.x), notes.getTileY(grid7.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid8, notes) && this.input.keyboard.isDown(Phaser.Keyboard.G)) 
					{ 
				
					newNote = this.map.putTile(1, notes.getTileX(grid8.x), notes.getTileY(grid8.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid9, notes) && this.input.keyboard.isDown(Phaser.Keyboard.Y) ) 
					{ 
					
					newNote = this.map.putTile(1, notes.getTileX(grid9.x), notes.getTileY(grid9.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid10, notes) && this.input.keyboard.isDown(Phaser.Keyboard.H) ) 
					{ 
				
					newNote = this.map.putTile(1, notes.getTileX(grid10.x), notes.getTileY(grid10.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid11, notes) && this.input.keyboard.isDown(Phaser.Keyboard.U) ) 
					{ 
					
					newNote = this.map.putTile(1, notes.getTileX(grid11.x), notes.getTileY(grid11.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid12, notes) && this.input.keyboard.isDown(Phaser.Keyboard.J) ) 
					{ 
				
					newNote = this.map.putTile(1, notes.getTileX(grid12.x), notes.getTileY(grid12.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid13, notes) && this.input.keyboard.isDown(Phaser.Keyboard.K)) 
					{ 
					
					newNote = this.map.putTile(1, notes.getTileX(grid13.x), notes.getTileY(grid13.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid14, notes) && this.input.keyboard.isDown(Phaser.Keyboard.O)) 
					{ 
				
					newNote = this.map.putTile(1, notes.getTileX(grid14.x), notes.getTileY(grid14.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid15, notes) && this.input.keyboard.isDown(Phaser.Keyboard.L) ) 
					{ 
					
					newNote = this.map.putTile(1, notes.getTileX(grid15.x), notes.getTileY(grid15.y- 16), notes);
					}
					
					if (this.physics.arcade.collide(grid16, notes) && this.input.keyboard.isDown(Phaser.Keyboard.P)) 
					{ 
				
					newNote = this.map.putTile(1, notes.getTileX(grid16.x), notes.getTileY(grid16.y - 16), notes);
					}
					
					if (this.physics.arcade.collide(grid17, notes) && this.input.keyboard.isDown(Phaser.Keyboard.COLON)) 
					{
					newNote = this.map.putTile(1, notes.getTileX(grid17.x), notes.getTileY(grid17.y - 16) , notes);
					}
					
					// if (this.physics.arcade.collide(grid2, notes) && this.input.keyboard.isDown(Phaser.Keyboard.QUOTE)) 
// 					{ 
// 					
// 					newNote = this.map.putTile(1, notes.getTileX(grid18.x), notes.getTileY(grid18.y), notes);
// 					}
					
					
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
