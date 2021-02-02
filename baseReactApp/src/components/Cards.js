import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Title, Paragraph, TouchableRipple } from 'react-native-paper';

export default props => {

    return (
        
        <Card style={style.Borders}>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent}/> */}
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <TouchableRipple
                onPress={() => console.log('Pressed')}
                rippleColor="rgba(0, 0, 0, .32)"
                >
                    <Button>Cancel</Button>
                </TouchableRipple>
                <TouchableRipple
                onPress={() => console.log('Pressed')}
                rippleColor="rgba(0, 0, 0, .32)"
                >
                    <Button>OK</Button>
                </TouchableRipple>
            </Card.Actions>
        </Card>
        
    )
}

const style = StyleSheet.create({
    Borders: {
        marginBottom: 10,
        borderRadius: 15
    }
})