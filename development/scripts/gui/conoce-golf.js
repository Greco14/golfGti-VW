ConoceGolf = function(){
	this.settings={
		selectorColor: $('.colorInput'),
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
		s.selectorColor.removeClass('activeColor');
		$(this).addClass('activeColor')
	});


};
ConoceGolf.prototype.animations= function(){

};