import React from 'react';
import { View, Text } from 'react-native';
import ImageCenter from '../components/images/ImageCenter'
import Caps from '../components/labels/Labels'
import { Row, Col } from '../components/bootstrap/Bootstrap'

/*
export default props => (
    <View>
        <ImageCenter src="https://www.pedeoferta.com.br/mercado/img/ec/263.png"/>
         <Caps
         text="agora esse e o texto correto"/>
    </View>
)*/

export default props => (
    
    <Row>

        <Col xs={6} sm={4} md={3} lg={3}>
            <Text>eqw</Text>
        </Col>

        <Col xs={6} sm={4} md={3} lg={3}>
        <Text>eqw</Text>
        </Col>

        <Col xs={6} sm={4} md={3} lg={3}>
        <Text>eqw</Text>
        </Col>

        <Col xs={6} sm={4} md={3} lg={3}>
        <Text>eqw</Text>
        </Col>

    </Row>
    
)