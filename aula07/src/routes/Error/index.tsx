// import styled from "styled-components"; //obrigatório

// const Img404 = styled.img`
//   display:block;
//   margin:0 auto;
//   width:50%
// `
import {Img404} from "../../style/styled"; //estilização foi colocada diretamente do arquivo styled.ts

export default function Error(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "Erro 404";
    
    let nrAleatorio = Math.floor(Math.random() * 3) + 1;

    return(
      <div>
        <h1>Erro 404</h1>
        <h2>Página não encontrada.</h2>
        <figure>
          <Img404 src={`/404/img-404-${nrAleatorio}.jpg`} alt="Erro 404" />
        </figure>
      </div>
    );
  }