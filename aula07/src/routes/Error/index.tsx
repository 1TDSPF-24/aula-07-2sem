import styled from "styled-components";

const img404 = styled.img`
  display: block;
  margin: 0, auto;
  width: 50%
`;

export default function Error(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "Erro 404";
      let nrAleatorio = Math.floor(Math.random() * 3) + 1;
    return(
      <div>
        <h1>Erro 404</h1>
        <h1>Página não encontrada.</h1>
        <figure>
          <img src={`/404/404-${nrAleatorio}.avif`} alt="Error 404" />
        </figure>
      </div>
    );
  }