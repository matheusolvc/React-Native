import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';

import Social from './socialIcons'

export default props => {
    const LeftContent = props => <Avatar.Image {...props} source={{uri: 'https://www.pedeoferta.com.br/mercado/img/ec/204.png'}} />
    return (
        
        <Card style={style.Borders}>
            <Card.Title title="Tauste"  left={LeftContent}/>
            <View style={style.Row}>
                <Paragraph>Ver endereço</Paragraph>
                <Paragraph>Acaba em 23 dia(s)</Paragraph>
            </View>
            <Card.Cover source={{ uri: 'https://www.pedeoferta.com.br/mercado/img/marca/HEINZ/resized_320x200/3.png' }} />
            <Card.Actions style={{ justifyContent: 'space-between' }}>
                    <Social/>
                    <Button style={style.buy} color='#fff'>Comprar</Button>
            </Card.Actions>
            <View style={style.bottomView}>
                <Paragraph style={style.textBottom}>O preço pode ser alterado pelo estabelecimento</Paragraph>
            </View>
        </Card>
        
    )
}

const style = StyleSheet.create({
    Borders: {
        marginBottom: 10,
        borderRadius: 15
    },
    Row: {
        paddingHorizontal: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomView: {
        padding: 10,
    },
    textBottom: {
        color: '#c2c2c2',
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 11,
        fontFamily: 'Exo2'
    },
    buy: {
        backgroundColor: '#2cba27',
        color: '#fff',
        paddingHorizontal: 15,
        borderRadius: 25
    }
})