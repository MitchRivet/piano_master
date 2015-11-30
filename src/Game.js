PianoMaster.Game = function(game){

		// define variables for Piano Master


		var keyboard;
		var camera;
		var cKey;
		var map;
		var backgroundlayer;
		var toplayer;
		var line;
		var controls;

		var testTile;
		var notes;
		var success;
		var backgroundlayerkey;
		var toplayerkey;
		var currentlayer;
		};

		PianoMaster.Game.prototype = {



				create: function() {
						//load map and tile data
						this.map = this.game.add.tilemap('fur_elise');
						this.map.addTilesetImage('blueSheet', 'blue_tiles', 32, 32, 0, 0, 1);
						this.map.addTilesetImage('greenSheet', 'green_tiles', 32, 32, 0, 0, 2);

						//create the layers, do I load one or the other first?
						success = this.backgroundlayer = this.map.createLayer('success');
						notes = this.toplayer = this.map.createLayer('notes');
						this.toplayer.resizeWorld();

						//set the camera position, starting at the bottom of the tile map, not the window
						this.camera.y = 6400;

						//figure out what this does
						// layer.wrap = true;

						testTile = this.add.sprite(32, 32, 'testTile');
						testTile.fixedToCamera = true;

						//add in the line and the keyboard, set them fixed to the camera
						line = this.add.sprite(0, 352, 'line');
						line.fixedToCamera = true;
						keyboard = this.add.sprite(0, 640, 'keyboard');
						keyboard.fixedToCamera = true;

						//link the variable cKey to the piano sound we loaded
						cKey = this.add.audio('cKey');
						cKey.allowMultiple = true;

						//show the different note layers, test
						toplayerkey = this.input.keyboard.addKey(Phaser.Keyboard.ONE);
						backgroundlayerkey = this.input.keyboard.addKey(Phaser.Keyboard.TWO);

						toplayerkey.onDown.add(controller, this);
						backgroundlayerkey.onDown.add(controller, this);

						//link the variable cKey to the keyboard input
						controls = this.input.keyboard.addKeys({ cKey: Phaser.Keyboard.A });


						controls.cKey.onDown.add(controller, this);


						//for adding notes, you may want them not snapped to the grid. you may want those to just appear opaque on the map.
						//you probably want to make an if statement to find if there is a blue note wether to turn it red, green, or yellow
						//how can we do that? 
						function controller(key)
						{
								switch (key.keyCode)
							{
								case Phaser.Keyboard.A:
								cKey.play();
								newNote = this.map.putTile(1, 2, notes.getTileY(line.y), 'notes');
								console.log(newNote);
								break;

								case Phaser.Keyboard.ONE:
								notes.alpha = 1;
								success.alpha = 0;
								break;

								case Phaser.Keyboard.TWO:
									notes.alpha = 0;
									success.alpha = 1;
								break;
							}

						}

					console.log(notes.getTileY(line.y));
					},

			update: function()
			{
				//tell the camera to scroll up. will have to findout what these units are to sync with audio.
				//seems like its scrolling one tile per sec
				this.camera.y -= 1;



			}



		};

		// PianoMaster.item = {
			// playFx: function (key) {
			// 	//switch is very similar to an if statement
			// 	switch (key.keyCode)
			// {
			// 	//in the case that the phaser.keyboard a is pressed
			// 	case Phaser.Keyboard.A:
			// 		cKey.play();
			//
			// 	}
			// }
//
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
	// };
