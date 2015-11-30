PianoMaster.Game = function(game){

		// define variables for Piano Master


		var keyboard;
		var camera;
		var cKey;
		var map;
		var backgroundlayer;
		var line;
		var controls;

		};

		PianoMaster.Game.prototype = {



				create: function() {
						//load map and tile data
						this.map = this.game.add.tilemap('fur_elise');
						this.map.addTilesetImage('blueSheet', 'blue_tiles');
						this.map.addTilesetImage('greenSheet', 'green_tiles');

						//create the layers, do I load one or the other first?
						this.backgroundlayer = this.map.createLayer('success');
						this.toplayer = this.map.createLayer('notes');
						this.backgroundlayer.resizeWorld();

						//set the camera position, starting at the bottom of the tile map, not the window
						this.camera.y = 6400;

						//figure out what this does
						// layer.wrap = true;

						//add in the line and the keyboard, set them fixed to the camera
						line = this.add.sprite(0, 352, 'line');
						line.fixedToCamera = true;
						keyboard = this.add.sprite(0, 640, 'keyboard');
						keyboard.fixedToCamera = true;

						//link the variable cKey to the piano sound we loaded
						cKey = this.add.audio('cKey');
						cKey.allowMultiple = true;

						//link the variable cKey to the keyboard input
						controls = this.input.keyboard.addKeys({ cKey: Phaser.Keyboard.A });
						console.log(controls);
					},

			// start: function() {
			// 				//when the cKey is pressed, run the function playFx
			// 				controls.cKey.onDown.add(playFx, this);
			// 		},

			update: function() {
				//tell the camera to scroll up. will have to findout what these units are to sync with audio.
				//seems like its scrolling one tile per sec
				this.camera.y -= 1;
				controls.cKey.onDown.add(playFx, this);

				function playFx() {
					cKey.play(); 
				}
			}


		};

		PianoMaster.item = {
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
// 			//function we have to play the sound associated with our controls
// 			//may have to move this in to the code below
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
	};
