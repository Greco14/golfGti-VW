BodyFit= function(){
	this.settings={
		body_H : $(window).height(),
		wrapper : $('#wrapper'),
	};
};

BodyFit.prototype.init= function(){
	var self = this;
	self.bind();
};

BodyFit.prototype.bind= function(){
	var self = this,
		s = self.settings;
	var alto = s.body_H-210
	s.wrapper.css({ height: alto});
};