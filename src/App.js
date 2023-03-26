import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const products = ["Kalem", "Silgi", "Defter", "Uç"];

  const handleSearchQueryChange = (event) => setSearchQuery(event.target.value);

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            placeholder="Ürün ara"
            className="form-control"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 pt-4">
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          ) : (
            <p>Bir sonuç bulunamadı.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
