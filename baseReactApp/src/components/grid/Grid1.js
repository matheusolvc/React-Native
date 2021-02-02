import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Row, Col } from '../bootstrap/Bootstrap'

let styles = StyleSheet.create({
    
    colBody:{
        width: '100%',
        height:100,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#fe9938',
        marginBottom:5,
    },
    colTitle:{
        fontSize:14,
        color:'#fff'
    },
})

/*
export default props => (
    <View>
        <ImageCenter src="https://www.pedeoferta.com.br/mercado/img/ec/263.png"/>
         <Caps
         text="agora esse e o texto correto"/>
    </View>
)*/

export default props => (
    <>
    <Row>

        <Col xs={12}>
            <Text>LOGO E NOME DO MERCADO</Text>
        </Col>
    </Row>
    <Row>
        <Col xs={6}>
            <Text>DISTANCIA</Text>
        </Col>

        <Col xs={6}>
            <Text>ACABA EM</Text>
        </Col>
    </Row>
    <Row>
        <Col xs={12}>
        <Text>ACABA EM</Text>
        </Col>
    </Row>
    <Row>
        <Col xs={12}>   
        <View style={[styles.colBody]}>
            <Text style={[styles.colTitle]}>
            12
            </Text> 
            </View>
        </Col>
    </Row>
    <Row>
        <Col xs={6}>
            <Text>BOTOES COMPARTILHAR</Text>
        </Col>

        <Col xs={6}>
            <Text>BOTAO COMPRAR</Text>
        </Col>
    </Row>
    </>
    
)

