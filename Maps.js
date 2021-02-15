import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    latitude: -23.424275,
                    longitude: -47.459243,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.008
                }}
            >
                <Marker
                    coordinate={{
                        latitude: -23.424275,
                        longitude: -47.459243,
                    }}
                    title="Home"
                    description="Minha casa"
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: '100%'
    }
})