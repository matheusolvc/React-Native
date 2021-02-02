import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import Cards from '../components/Cards'

export default props => {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return (
        <ScrollView style={style.Box}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />  
        </ScrollView>
    )
}

const style = StyleSheet.create({
    Box: {
        padding: 10
    }
})