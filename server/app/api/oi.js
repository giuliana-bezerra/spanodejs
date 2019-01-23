var api = {};

api.get = function(req, res) {
	var ola = `Oi ${req.params.nome}`;
	console.log(ola);
	return res.json(ola);
}

module.exports = api;
