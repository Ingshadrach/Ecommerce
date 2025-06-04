const { createPool } = require('mysql');

 const pool = createPool({
   host: '127.0.0.1',
   user: 'root',
   port: 3306,
   password: 'root',
   database: 'ShopTok'
 });

function addProductToDatabase(productId, productName, productPrice, productStock) {
  const query = 'INSERT INTO products (product_id, product_name, product_price, product_stock) VALUES (?, ?, ?, ?)';
  pool.query(query, [productId, productName, productPrice, productStock], (err, result) => {
    if (err) {
      console.error('Error adding product to database:', err);
      return;
    }
    console.log('Product added to database:', result);
  });
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));
    addProductToDatabase(productName, productPrice);
  });
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});