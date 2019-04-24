// How to start mySQL from command line
sudo service start mysql

CREATE VIEW ProductOnhand AS SELECT Product.name, Product.qty*Product.price AS onhand FROM Product WHERE Product.qty > 0;

/** -------------- */

SELECT Company.name, AVG(Product.price) AS AvgPrice FROM Company LEFT JOIN Product ON Company.id = Product.company GROUP BY Company.name;