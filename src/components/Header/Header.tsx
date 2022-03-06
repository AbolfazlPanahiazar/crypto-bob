import { FC, useState } from "react";
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
  const [search, setSearch] = useState<string>("");

  return (
    <HeaderContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo src={logo} title="Crypto Bob" />
        <InputContainer>
          <FaSearch style={{ margin: 15 }} />
          <SearchInput
            placeholder="Search what you're lookin for..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputContainer>
      </div>
      <div>
        <MenuItem href="mailto:abolfazlpanahiazar@gmail.com">
          Contact Me
        </MenuItem>
        <MenuItem
          href="https://linkedin.com/in/abolfazlpanahiazar/"
          target="_blank"
        >
          Linkedin
        </MenuItem>
        <MenuItem href="https://github.com/abolfazlPanahiazar" target="_blank">
          Github
        </MenuItem>
      </div>
    </HeaderContainer>
  );
};

export default Header;
