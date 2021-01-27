import {Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import { colors } from '../../utils/colors';
import { Button, ButtonContainer, ButtonText, Container, Safe, StatusB, TimerCircle, TimerContainer, TimerText, TimerTextConf } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBeep from 'react-native-a-beep';

const Main = (Props) => {
    const [Time, setTime] = useState(0);
    const [Type, setType] = useState("cresc");
    const [Active, setActive] = useState(false);
    const [Count, setCount] = useState(0);

    useEffect(() => {
        let intervalId;
        handleGetStoreData();
        if(Active){
            if(Type == 'cresc'){
                if(Count < Time){
                    intervalId = setInterval(() => {
                            setCount(val => val + 1);
                            return Count;
                    }, 1000);
                }
                if(Count == Time && Type == 'cresc'){
                    RNBeep.PlaySysSound(30);
                    setTimeout(() => {
                        setActive(false); 
                        setCount(0);
                    }, 1000);
                }
            }

            if(Type == 'dec'){
                if(Count > 0){
                intervalId = setInterval(() => {
                        setCount(val => val - 1);
                        return Count;
                }, 1000);
                }
                if(Count == 0 && Type == 'dec'){
                    RNBeep.PlaySysSound(30);
                    setTimeout(() => {
                        setActive(false); 
                        setCount(Time);
                    }, 1000);
                }
            }
        }
        return () => clearInterval(intervalId);
    }, [Active, Count]);
    
    const handleConfig = () => {
        const {navigation} = Props;
        navigation.navigate('Config');
    }

    const handleGetStoreData = async() => {
        const cacheTime = await AsyncStorage.getItem('@config/time');
        const cacheType = await AsyncStorage.getItem('@config/type');

        setTime(cacheTime);
        setType(cacheType);
    }

    const handleStartTimer = () => {
        setActive(!Active);
    }

    const handleReset = () => {
        if(Type == 'cresc'){
            setActive(false);
            setCount(0);
        }else{
            setActive(false);
            setCount(Time)
        }
    }

    return(
        <Safe>
            <StatusB backgroundColor={colors.background}/>
            <Container>
                <TimerContainer onPress={() => handleConfig()}>
                    <TimerCircle>
                        <TimerText>{Count}</TimerText>
                        <TimerTextConf>{Time}</TimerTextConf>
                    </TimerCircle>
                </TimerContainer>
                <ButtonContainer>
                    <Button onPress={() => handleStartTimer()}><ButtonText>{Active ? 'Parar' : 'Iniciar'}</ButtonText></Button>
                    <Button onPress={() => handleReset()}><ButtonText>Resetar</ButtonText></Button>
                </ButtonContainer>
            </Container>
        </Safe>
    );
}

export default Main;