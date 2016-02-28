module.exports = function (app) {

	app.get('/',function (request,response) {
		response.render('index');		
	});

	app.post('/',function (request,response) {

		var formulario = request.body;

		var connection = app.infra.connectionFactory();
		var formularioDAO = new app.infra.FormularioDAO(connection);

		formularioDAO.salva(formulario,function(err,results){
			response.redirect('/');
		});

		connection.end();
	});
};