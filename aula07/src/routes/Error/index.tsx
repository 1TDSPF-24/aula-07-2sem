import { img404 } from "../../style/styled";


export default function Error(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "Erro 404";

      // Para arredondar um valor decimal para baixo
      const nrAleatorio = Math.floor(Math.random() * 3) + 1;


    return(
      <div>
        <h1>Erro 404</h1>
        <h2>Página não encontrada</h2>
        <figure>
          <img404 src={`/404/404_${nrAleatorio}.jpg`} alt="Erro 404" />
        </figure>
      </div>
    );
  }