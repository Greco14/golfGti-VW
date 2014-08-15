ConoceGolf = function(){
	this.settings={
		selectorColor: $('.colorInput'),
		cocheColor: $('.maskSvg').find('path'),
		btns_hide: $('.btn-car'),
		btns_hide2: $('.btn-conoce'),
		hideGolf: $('.golfView-btn'),
		hideGti: $('.gtiView-btn'),
		hideGolf_all: $('.golfView'),
		hideGti_all: $('.gtiView'),
	}
};
ConoceGolf.prototype.init = function() {
	var self = this;
	self.bind();
};

ConoceGolf.prototype.bind = function() {
	var self = this,
		s = self.settings;

	s.selectorColor.on('click',function(){
		var laId = $(this).data('color');
		var color =  $(this).data('carro');; 

		s.selectorColor.removeClass('activeColor');
		s.cocheColor.css({ fill: color });
		$(this).addClass('activeColor');
	});
	s.btns_hide.on('click', function(){
		var hide = $(this).data('hide');
		var show = $(this).data('show');

		$('.'+hide+'-btn').css({display: 'none'});
		$('.'+hide).css({display: 'none'});

		$('.'+show+'-btn').css({display: 'block'});
		$('.'+show).css({display: 'block'});

	});

	s.btns_hide2.on('click', function(){
		var hide = $(this).data('hide');
		var show = $(this).data('show');
		console.log('click');
		$('.'+hide+'-btn').css({display: 'none'});
		$('.'+hide).css({display: 'none'});

		$('.'+show+'-btn').css({display: 'block'});
		$('.'+show).css({display: 'block'});

	});


};
ConoceGolf.prototype.animations= function(){

};