import { Link } from "react-router-dom";
import { Nav,MenuList,MenuItem, MenuLink } from "../../style/styled";
import { MdOutlineHome as HomeIcon } from "react-icons/md";

export default function Menu(){
    return(
      <Nav>
        <MenuList>
            <MenuItem> <Link to="/"><MenuLink><HomeIcon/>Home</MenuLink></Link></MenuItem>
            <MenuItem><Link to="/produtos"><MenuLink>Produtos</MenuLink></Link></MenuItem>
            <MenuItem><Link to="/editar/produtos/1"><MenuLink>Editar Produto - 1</MenuLink></Link></MenuItem>
        </MenuList>
      </Nav>
    );
  }