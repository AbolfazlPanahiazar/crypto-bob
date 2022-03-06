import { FC } from "react";
import { FaSearch } from "react-icons/fa";

import {
  HeaderContainer,
  Logo,
  InputContainer,
  SearchInput,
  MenuItem,
} from "./header.styles";
import logo from "../../assets/images/logo.png";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo src={logo} />
        <InputContainer>
          <FaSearch style={{ margin: 15 }} />
          <SearchInput placeholder="Search what you're lookin for..." />
        </InputContainer>
      </div>
      <div>
        <MenuItem href="mailto:abolfazlpanahiazar@gmail.com">
          Contact Me
        </MenuItem>
        <MenuItem href="https://linkedin.com/in/abolfazlpanahiazar/" target="_blank">
          Linkedin
        </MenuItem>
        <MenuItem href="https://github.com/abolfazlPanahiazar" target="_blank">Github</MenuItem>
      </div>
    </HeaderContainer>
  );
};

export default Header;
