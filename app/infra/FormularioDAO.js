function FormularioDAO(connection) {
	this._connection = connection;
}

FormularioDAO.prototype.salva = function (formulario,callback) {
	this._connection.query('insert into  set ?',formulario,callback);
};

module.exports = function () {
	return FormularioDAO;
}