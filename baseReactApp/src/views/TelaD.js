import React from 'react'
import { Button, View } from 'react-native'

import TextoCentral from '../components/TextoCentral'

export default props => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button
                    title='Abrir'
                    onPress={() => props.navigation.openDrawer()}
                
                />
            </View>
            <View style={{flex: 1}}>
                <TextoCentral corFundo='#33FA72'>
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}
