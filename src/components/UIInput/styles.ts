import styled from "styled-components/native";

export const Container = styled.View`
  height: 60px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80px;
  background-color: #f0f0f0;
  margin-right: 3px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 32px;
  padding: 0 15px;
  background-color: #f0f0f0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;