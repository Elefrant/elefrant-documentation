'use strict';

var component = require('../component'),
		restify = require('restify'),
		should = require('should');

var server = restify.createServer();

describe('documentation', function () {

	it('exports an object', function () {
		should.exist(component);
	});

	it('check afterRoute', function () {
		should(component.afterRoute.func({
			server: server
		})).be.ok;
	});

	it('check paramRoute', function () {
		should(component.paramRoute({})).be.an.Object;
	});
});
