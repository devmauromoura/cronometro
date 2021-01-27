import styled from 'styled-components';
import {colors} from '../../../utils/colors';

export const Safe = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.background};
`;
export const StatusB = styled.StatusBar``;

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
`;

export const TimeContainer = styled.View`
    width: 60%;
`;
export const TimeLabel = styled.Text`
    color: ${colors.white};
    font-weight: bold;
    font-size: 18px;
`;
export const TimeInput = styled.TextInput`
    background-color: ${colors.white};
    border-radius: 5px;
    margin-top: 5px;
    font-size: 18px;
`;

export const TimeTypeContainer = styled.View`
    width: 60%;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const TimeTypeButton = styled.TouchableOpacity`
    background-color: ${props => props.selected ? colors.blue : colors.white};
    height: 50px;
    width: 48%;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const TimeTypeText = styled.Text`
    color: ${props => props.selected ? colors.white : colors.background};
    font-weight: bold;
    font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: ${colors.white};
    height: 50px;
    width: 60%;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${colors.background};
    font-weight: bold;
    font-size: 18px;
`;