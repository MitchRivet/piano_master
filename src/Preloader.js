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
				
				this.load.spritesheet('note', '../assets/img/note.png', 82, 98); 
				this.load.spritesheet('button-start', '../assets/img/button-start.png', 401, 143); 
				
				}, 
				
			create: function(){
				this.state.start('MainMenu'); 
			}
			
	}; 