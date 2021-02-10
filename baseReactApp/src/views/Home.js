import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import Cards from '../components/Cards'

export default props => {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return (
        <ScrollView style={style.Box}>
            <Cards
                avatar='https://www.pedeoferta.com.br/mercado/img/ec/204.png'
                productImage='https://www.pedeoferta.com.br/mercado/img/marca/HEINZ/resized_320x200/3.png'
                title='Tauste'
                price='8,49'
                productName='Ketchup Heinz'
                productLink='https://pedeoferta.com.br/18457'
            />
            <Cards
                avatar='https://www.pedeoferta.com.br/mercado/img/ec/204.png'
                productImage='https://www.pedeoferta.com.br/mercado/img/marca/HEINZ/resized_320x200/3.png'
                title='Tauste'
                price='8,49'
                productName='Ketchup Heinz'
                productLink='https://pedeoferta.com.br/18457'
            />
            
            <Cards />
            <Cards />  
        </ScrollView>
    )
}

const style = StyleSheet.create({
    Box: {
        padding: 20
    }
})