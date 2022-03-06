import styled from "styled-components";

export const CardWrapper = styled.div`
  color: white;
  width: 300px;
  border-radius: 10px;
  background-color: #1e2e3e;
  padding-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
