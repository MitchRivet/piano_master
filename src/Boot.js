var PianoMaster = {};  
PianoMaster.Boot = function(game){}; 
PianoMaster.Boot.prototype = { 
		
		preload: function() {
		this.load.image('preloaderBar', '../assets/img/loading-bar.png'); 
		}, 
		
		create: function(){
			this.input.maxPointers = 1; 
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
			this.scale.pageAlignHorizontally = true; 
			this.scale.pageAlignVertically = true; 
			 
			
			this.state.start('Preloader'); 
			}
			
	}; 