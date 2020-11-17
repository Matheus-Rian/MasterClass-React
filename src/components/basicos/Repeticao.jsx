import React from "react";

import products from "../../data/products";

//eslint-disable-next-line
export default (props) => {

  const getProductsListItem = () => {
    return products.map(prod => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.nome} -&gt; R$ {prod.preco}
        </li>
      );
    });
  };

  return (
    <div>
        <h2>Repetição</h2>
      <ul>
        {getProductsListItem()}
      </ul>
    </div>
  );
};
