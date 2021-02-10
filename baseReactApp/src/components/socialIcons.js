import React from 'react'
import { Button, StyleSheet, TouchableHighlight, View } from 'react-native'
import { SocialIcon } from 'react-native-elements'

export default props => {
    return (
        <TouchableHighlight style={style.row} onPress={() => props.onClick(props.message)}>
            <SocialIcon iconSize={18} light type='share-alt' iconColor='#25D366'/>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    row: {
       flexDirection: 'row'
   }
})