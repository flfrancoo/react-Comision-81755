import React from 'react';

function ItemListContainer({ saludo }) {
  return (
    <section style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>{saludo}</h2>
    </section>
  );
}

export default ItemListContainer;