'use strict';

var documentation = require('./lib/documentation'),
		configDefault = require('./config/documentation'),
		name = 'documentation';

module.exports = {
	enable: true,

	name: name,

	afterRoute: {
		weight: 10,
		func: function (elefrant) {
			var config = configDefault;
			if (elefrant && elefrant.getConfigComp) {
				config = elefrant.getConfigComp(name, configDefault);
			}

			return documentation(elefrant.server, config);
		}
	},

	paramRoute: function (elefrant, route, action) {
		if(action && action.spec) {
			return {
				swagger: action.spec !== undefined ? action.spec : false
			};
		} else {
			return {};
		}
	}
};
