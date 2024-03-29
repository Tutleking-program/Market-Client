import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://dbb89639-e21d-4a82-b877-e72537f2648c.mock.pstmn.io/products"
      )
      .then(function (result) {
        console.log("통신 결과" + result.data);
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("에러 발생", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function (product, idx) {
          return (
            <div className="product-card">
              <Link
                style={{ color: "inherit" }}
                className="product-link"
                to={"/products/" + product.id}
              >
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MainPage;
