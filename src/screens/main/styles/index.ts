import {Dimensions} from 'react-native';
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
    justify-content: center;
`;

export const TimerContainer = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
`;

export const TimerCircle = styled.View`
    background-color: ${colors.gray};
    border-color: ${colors.white};
    border-width: 10px;
    height: ${Dimensions.get('screen').width - 100}px;
    width: ${Dimensions.get('screen').width - 100}px;
    border-radius: ${Dimensions.get('screen').width - 100 / 2}px;
    align-items: center;
    justify-content: center;
`;
export const TimerText = styled.Text`
    color: ${colors.blue};
    font-size: 60px;
`;
export const TimerTextConf = styled.Text`
    color: ${colors.blue};
    font-size: 20px;
    margin-top: -15px;
`;

export const ButtonContainer = styled.View`
    position: absolute;
    bottom: 10px;
    width: 100%;
    justify-content: space-around;
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    height: 50px;
    width: 45%;
    background-color: ${colors.white};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const ButtonText = styled.Text`
    color: ${colors.background};
    font-weight: bold;
    font-size: 18px;
`;