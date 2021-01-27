import React, {useEffect, useState} from 'react';
import {colors} from '../../utils/colors';
import { Button, ButtonText, Container, Safe, StatusB, TimeContainer, TimeInput, TimeLabel, TimeTypeButton, TimeTypeContainer, TimeTypeText } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Config = (Props) => {
    const {navigation} = Props;
    useEffect(() => {
        navigation.setOptions({title: 'Configuração'});
        handleGetStoreData();
    }, []);

    const [Time, setTime] = useState(null);
    const [Type, setType] = useState("cresc");

    const handleSetType = (nowType: string) => {
        setType(nowType);
    }

    const handleGetStoreData = async() => {
        const cacheTime = await AsyncStorage.getItem('@config/time');
        const cacheType = await AsyncStorage.getItem('@config/type');

        setTime(cacheTime);
        setType(cacheType);
    }

    const handleSave = async() => {
        await AsyncStorage.setItem('@config/time', Time);
        await AsyncStorage.setItem('@config/type', Type);
        navigation.goBack();
    }

    return(
        <Safe>
            <StatusB />
            <Container>
                <TimeContainer>
                    <TimeLabel>Tempo</TimeLabel>
                    <TimeInput value={Time} onChangeText={text => setTime(text)} keyboardType="phone-pad"/>
                </TimeContainer>
                <TimeTypeContainer>
                    <TimeTypeButton selected={Type == "cresc" ? true : false} onPress={() => handleSetType("cresc")}>
                        <TimeTypeText selected={Type == "cresc" ? true : false}>Cresc. [+]</TimeTypeText>
                    </TimeTypeButton>
                    <TimeTypeButton selected={Type == "dec" ? true : false} onPress={() => handleSetType("dec")}>
                        <TimeTypeText selected={Type == "dec" ? true : false}>Dec. [-]</TimeTypeText>
                    </TimeTypeButton>
                </TimeTypeContainer>
                <Button onPress={() => handleSave()}>
                    <ButtonText>Salvar</ButtonText>
                </Button>
            </Container>
        </Safe>
    );
}

export default Config;