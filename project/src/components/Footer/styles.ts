import styled from "styled-components";

export const FooterStlyed = styled.div`
  width: 100%;
  height: 116px;
  bottom: 0;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  background-color: ${({ theme }) => theme.colors.surface1};
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12);
`;
export const FooterContent = styled.div`
  color: ${({ theme }) => theme.colors.onsurfacelv2};
  font-family: Roboto;
  font-size: 12px;
  margin-top: 24px;
  margin-bottom: 32px;
`;
