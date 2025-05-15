import React from 'react';
import styled from 'styled-components';

// 1️⃣ Componente com Inline Styles
function CardInline() {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    margin: '16px auto',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    marginTop: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Inline Style</h2>
      <p>Esse card usa estilo inline.</p>
      <button style={buttonStyle}>Clique aqui</button>
    </div>
  );
}

// 2️⃣ Componente com "CSS Modules" (simulado no mesmo arquivo)
const cssModuleStyles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    margin: '16px auto',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
  }
};

function CardCSSModule() {
  return (
    <div style={cssModuleStyles.card}>
      <h2 style={cssModuleStyles.title}>CSS Modules (fake)</h2>
      <p>Simulação de CSS Modules inline.</p>
      <button style={cssModuleStyles.button}>Clique aqui</button>
    </div>
  );
}

// 3️⃣ Componente com Styled Components
const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin: 16px auto;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: #e91e63;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
`;

function CardStyled() {
  return (
    <CardContainer>
      <Title>Styled Components</Title>
      <p>Esse card usa styled-components.</p>
      <Button>Clique aqui</Button>
    </CardContainer>
  );
}

// 4️⃣ Componente com Tailwind CSS
function CardTailwind() {
  return (
    <div className="border rounded-lg p-4 max-w-sm mx-auto mt-4 shadow-md">
      <h2 className="text-xl font-bold">Tailwind CSS</h2>
      <p className="text-gray-700">Esse card usa Tailwind CSS.</p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Clique aqui</button>
    </div>
  );
}

// Componente principal que renderiza os 4
function Card() {
  return (
    <div>
      <CardInline />
      <CardCSSModule />
      <CardStyled />
      <CardTailwind />
    </div>
  );
}

export default Card;
