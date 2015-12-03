PianoMaster.Preloader = function(game) {

			PianoMaster.GAME_WIDTH = 640;
			PianoMaster.GAME_HEIGHT = 960;
	};

	PianoMaster.Preloader.prototype = {
			preload: function(){

				this.stage.backgroundColor = '#414040';
				this.preloadBar = this.add.sprite((PianoMaster.GAME_WIDTH)/2, (PianoMaster.GAME_HEIGHT-27)/2, 'preloaderBar');
				this.load.setPreloadSprite(this.preloadBar);

				this.load.image('keyboard', '../assets/img/keyboard.png');
				this.load.image('grid_collide', '../assets/img/grid_collide-01.png');
				this.load.image('testTile', '../assets/img/testAdd.png'); 
				this.load.spritesheet('note', '../assets/img/note.png', 82, 98);
				this.load.spritesheet('button-start', '../assets/img/button-start.png', 401, 143);

				this.load.tilemap('fur_elise', '../assets/levels/fur_elise_11.json', null, Phaser.Tilemap.TILED_JSON);
				this.load.image('blue_tiles', '../assets/img/blueSheet.png');
				this.load.image('green_tiles', '../assets/img/greenSheet.png');

				this.load.audio('cKey', '../assets/audio/piano/c.mp3'); 
				this.load.audio('fur_elise_1', '../assets/audio/songs/furelise_sec1_60bpm.mp3'); 
				},

			create: function(){
				this.state.start('MainMenu');
			}

	};
