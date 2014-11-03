'use strict';

var restifySwagger = require('node-restify-swagger');

module.exports = function (server, config) {
	restifySwagger.configure(server, {
		info: config.info,
		apiDescriptions: config.apiDescriptions,
		discoveryUrl: config.discoveryUrl
		//authorizations: { // TODO FIX OAUTH 2.0
		//	oauth2: {
		//		type: 'oauth2',
		//		passAs: 'header',
		//		keyname: '',
		//		scopes: [
		//			{
		//				scope: 'read:email',
		//				description: 'Access to your email address'
		//			}
		//		],
		//		grantTypes: {
		//			implicit: {
		//				loginEndpoint: {
		//					url: config.server.host + '/oauth2/dialog'
		//				},
		//				tokenName: 'access_token'
		//			},
		//			authorization_code: {
		//				tokenRequestEndpoint: {
		//					url: config.server.host + '/oauth2/authorization',
		//					clientIdName: 'clientId',
		//					clientSecretName: 'clientSecret'
		//				},
		//				tokenEndpoint: {
		//					url: config.server.host + '/oauth2/token',
		//					tokenName: 'access_code'
		//				}
		//			}
		//		}
		//	}
		//}
	});

	restifySwagger.loadRestifyRoutes();

	return true;
};
