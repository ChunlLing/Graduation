var $ = function (args) {
	return new LibObj(args);
};

function LibObj(args) {
	this.elements = [];
	if (typeof args == 'string') {
		switch (args.charAt(0)) {
			case '#' :
				this.elements.push(document.querySelector(args));
				break;
			case '.' :
				this.elements.push(document.querySelectorAll(args));
				break;
			default :
				this.elements.push(document.querySelectorAll(args));
		}
	}
}