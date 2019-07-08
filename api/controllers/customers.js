const mysqlConnection = require('../../database');

exports.customers_get_all = (req, res, next) => {

    queryString = "SELECT * FROM customer";

    mysqlConnection.query(queryString, (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        }
        else {
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
    });
}

exports.customers_get_customer_by_id = (req, res, next) => {
    const { id } = req.params;
    queryString = "SELECT * FROM customer WHERE id = ?";

    mysqlConnection.query(queryString, [id], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        }
        else {
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
    });
}

exports.customers_add_customer = (req, res, next) => {

    const {
        fullname,
        address
    } = req.body;

    const queryString = `
            INSERT INTO customer
            (fullname, address)
            VALUES
            (?,?);
            `;

    mysqlConnection.query(queryString, [fullname, address], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                message: 'Customer successfully inserted'
            });
        }
        else {
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
    });

}