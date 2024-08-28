import styled from "styled-components";

const Img404 = styled.img`
  display: block;
  margin: 0 auto;
  width: 50%;
`

export default function Error(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "Erro 404";

      const nrAleatorio = Math.floor(Math.random()*3) + 1;
    return(
      <div>
        <h1>Erro 404</h1>
        <h2>Pagina nao encotrada</h2>
        <figure>
          <Img404 src={`/img-404-${nrAleatorio}.jpg`} alt="Erro 404" />
        </figure>
      </div>
    );
  }