module.exports = function(app) {
	var api = app.api.oi;
	app.route('/oi/:nome').get(api.get);
};
