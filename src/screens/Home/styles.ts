import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Load = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const OutputBox = styled.View`
  margin: 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const OutputDate = styled.Text`
  font-size: 20px;
`;

export const Output = styled.Text.attrs({
  adjustsFontSizeToFit: true,
  numberOfLines: 1
})`
  font-size: 100px;
  font-weight: bold;
`;

export const Inputs = styled.View`
  padding: 20px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: #106b03;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ConfirmButtonTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;