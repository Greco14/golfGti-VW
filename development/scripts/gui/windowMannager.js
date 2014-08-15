WindowMannager = function ($params){
	this.settings={
		menu: $('#menuList'),
		btn_menu: $('.menu-btn'),
		btn_share: $('#footer').find('#shareIcon'),
		close_socials: $('#share-mw-in').find('.closeMe'),
		btn_galeria: $('.botonesDown').find('.btn-galeria'),

		goTo_menu: $('#menuList').find('.btn'),
		shareMe: $('#share-mw-in'),
		galeriaHold: $('#galeria-section'),
		sharMe_socials: $('#share-mw-in').find('.holdShares'),
		btn_close: $('#galeria-section').find('#close_galeria'),
		

	};
	this.tlmenuDown = new TimelineLite();
	this.tlmenuUp = new TimelineLite();
	this.tlopenShare = new TimelineLite();
	this.tlUpShare = new TimelineLite();
	this.tlopenGaleria = new TimelineLite();
};
WindowMannager.prototype.init= function(){
	var self = this;
	self.bind();
};
WindowMannager.prototype.bind = function (){
	var self = this,
		s = self.settings;
		s.btn_menu.on('click', function(){
			self.animations('close-share')

			self.animations('menu')
		});
		s.goTo_menu.on('click', function(event){
			event.preventDefault();
			var laId = $(this).attr('id')

			$('.sectionFull').css('display','none');
			s.galeriaHold.animate({right:'-100%'},250);
			$('#'+laId+'-section').css('display','block')

			self.animations('close-menu')
		});

		s.btn_share.on('click', function(){
			self.animations('close-menu');
			self.animations('open-share')
		});

		s.close_socials.on('click', function(){
			self.animations('close-share')
		});

		s.btn_galeria.on('click', function(){
			self.animations('open-galeria');
		});
		s.btn_close.on('click', function(){
			self.animations('close-galeria');
		});
};
WindowMannager.prototype.animations = function (action){
	var self = this,
		s = self.settings;

		switch(action){
			case "menu":
				$('body').animate({
	                scrollTop: 0
	            }, 500);

				self.tlmenuDown.to(s.menu, 0.75,{
					top: 0,
					ease: Cubic.easeOut
				})
				break;
			case "close-menu":
				self.tlmenuDown.to(s.menu, 0.75,{
					top: '-100%',
					ease: Cubic.easeIn
				})
				break;
			case "open-share":
				s.shareMe.css({display: 'block'});
				// $('#holdsFooter').animate({height:100},250);
				self.tlopenShare.to(s.shareMe, 0.5,{
					opacity: 1,
					ease: Cubic.easeOut,
					onComplete: function(){
						self.tlUpShare.to(s.sharMe_socials, 0.3,{
							bottom: 70,
							ease: Cubic.easeOut,
						});
					}
				});
				break;
			case "close-share":
				
				self.tlUpShare.to(s.sharMe_socials, 0.3,{
					bottom: -90,
					ease: Cubic.easeIn,
					onComplete: function(){
						self.tlopenShare.to(s.shareMe, 0.5,{
							opacity: 0,
							ease: Cubic.easeIn,
							onComplete: function(){
								s.shareMe.css({display: 'none'});
							}
						});
					}
				});
				break;
			case "open-galeria":

				s.galeriaHold.css({display:'block'});

				self.tlopenGaleria.to( s.galeriaHold, 0.75,{
					right: 0,
					ease: Cubic.easeOut,
				});
				break;
			case "close-galeria":

				self.tlopenGaleria.to( s.galeriaHold, 0.75,{
					right: '-100%',
					ease: Cubic.easeOut,
					onComplete: function(){
						s.galeriaHold.css({display:'none'});
					}
				});
				break;
		};
};











