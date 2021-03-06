import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const InputContainer = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  background-color: #333333;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  flex-grow: 1;
  height: 100%;
  outline: none;
  color: white;
`;

export const MenuItem = styled.a`
  font-weight: bold;
  font-size: 16px;
  font-family: sans-serif;
  text-decoration: underline;
  margin-left: 20px;
  color: white;
`;

export const LoginButton = styled.div`
  background: linear-gradient(to right, #59f9b9, #66feea);
  margin-left: 20px;
  font-weight: bold;
  padding: 10px 20px;
  font-family: sans-serif;
  text-transform: uppercase;
  border-radius: 20px;
  color: black;
`;
