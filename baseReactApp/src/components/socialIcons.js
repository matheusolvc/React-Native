import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SocialIcon } from 'react-native-elements'

export default props => {
    
    return (
        <View style={style.row}>
            <SocialIcon iconSize={18} light type='facebook' />
            <SocialIcon iconSize={18} light type='instagram' />
            <SocialIcon iconSize={18} light type='whatsapp' iconColor='#25D366'/>
        </View>
    )
}

const style = StyleSheet.create({
    row: {
       flexDirection: 'row'
   }
})