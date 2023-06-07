import { Container } from "@/components/sharedstyles";
import styled from "styled-components";

export const SettingsContainer = styled(Container)`
  justify-content: center;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
`;
export const GreyCont = styled.div`
  background-color:${({ theme }) => theme.colors.surface2};
  width: 100%;
  padding: 16px 16px;
  border-radius: 8px;
  margin: 8px 8px;
`;
export const Cont = styled(GreyCont)`
  background-color:${({ theme }) => theme.colors.surface1};
  padding: 0;
  margin: 10px 0;
`;
export const Select = styled.select`
  width: 100%;
  height:100%;
  padding: 6px 16px;
  background-color: ${({ theme }) => theme.colors.surface2};
`;
export const SelectLang = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.onsurfacelv3};
  border-radius: 2px;
`
export const BlueTitle = styled.h5`
position: absolute;
left: 16px;
top: 6px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const SelectPointer = styled.svg`
position: absolute;
top:30%;
right:10px;
fill: ${({ theme }) => theme.colors.onsurfacelv1};
`
export const Title = styled.h2`
  margin: 10px 0 16px 0;
`;
export const Subtitle = styled.div`
  margin-bottom: 16px;
`;
export const GreyTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-family: "Roboto";
  color: ${({ theme }) => theme.colors.onsurfacelv2};
`;
export const BottomText = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;
export const Hr = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.onsurfacelv4};
  margin-bottom: 16px;
`;
export const Theme = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  font-size: 14px;
  width: 100%;
`;
export const Input = styled.input`
  font-size: 24px;
`;
