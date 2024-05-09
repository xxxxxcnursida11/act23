const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

productForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const productQuantity = document.getElementById('productQuantity').value;

  const productRow = document.createElement('tr');
  productRow.innerHTML = `
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
  `;

  productList.appendChild(productRow);

  productForm.reset();
});