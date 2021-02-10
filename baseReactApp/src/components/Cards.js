import React, {Component} from 'react';
import { Image, StyleSheet, Share, View, Text } from 'react-native'
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';

import Social from './socialIcons'

export default class App extends Component{

    LeftContent = props => <Avatar.Image {...props} source={{ uri: this.props.avatar }} />
    onShare = async message => {
        try {
          const result = await Share.share({
            message: message,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };
    render(){
    return (
        
        <Card style={style.Borders}>
            <Card.Title title={this.props.title} left={this.LeftContent}/>
            <View style={style.Row}>
                <Paragraph>Ver endereço</Paragraph>
                <Paragraph>Acaba em 23 dia(s)</Paragraph>
            </View>
            <Card.Cover source={{ uri: this.props.productImage }} style={ style.productImage}/>
            <View style={style.info}>
                <Text style={style.productName}>
                    {this.props.productName}
                </Text>
                <Text style={style.price}>
                    R$ {this.props.price}
                </Text>
            </View>
            <Card.Actions style={{ justifyContent: 'space-between' }}>
                    <Social message={this.props.productLink} onClick={ this.onShare }/>
                    <Button style={style.buy} color='#fff'>Comprar</Button>
            </Card.Actions>
            <View style={style.bottomView}>
                <Paragraph style={style.textBottom}>O preço pode ser alterado pelo estabelecimento</Paragraph>
            </View>
        </Card>
        
        )
    }
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
    },
    info: {
        marginTop: 15,
    },
    productImage: {
        resizeMode: 'center'
    },
    productName: {
        textAlign: 'center',
        color: '#A9A9A9',
        fontSize: 18,
        fontFamily: 'Exo2-Light'
    },
    price: {
        marginTop: 5,
        color: '#008000',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Exo2-Light'
    }
})