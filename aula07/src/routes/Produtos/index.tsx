import { listaProdutos } from "../../listaProdutos";

export default function Produtos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";

    return(
      <div>
        <h1>Produtos Eletrônicos</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Cor</th>
                <th>Foto</th>
              </tr>
            </thead>
            <tbody>

              {listaProdutos.map((produto)=>(
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.qtd}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.cor}</td>
                    <td>{produto.imagem}</td>
                </tr>                
              ))}

            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  Quantidade de produtos atual : {listaProdutos.length}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }