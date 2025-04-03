import React from 'react';

const ItemDetailPage = ({ item }) => {
  return (
    <>
      <h3>{item.title}</h3>
      <p>Completado: {`${item.completed}`}</p>
    </>
  );
};

export default ItemDetailPage;
