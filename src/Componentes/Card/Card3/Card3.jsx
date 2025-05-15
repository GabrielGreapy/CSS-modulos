import styled from 'styled-components';

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
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
`;

function Card() {
  return (
    <CardContainer>
      <Title>Título do Card</Title>
      <p>Essa é a descrição do card.</p>
      <Button>Clique aqui</Button>
    </CardContainer>
  );
}

export default Card;
