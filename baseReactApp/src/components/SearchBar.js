import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Searchbar } from 'react-native-paper';


export default props => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const onChangeSearch = query => setSearchQuery(query)
    
    return (
    <View>
        <Searchbar
            style={style.Searchbar}        
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    </View>
    )
}

const style = StyleSheet.create({
    Searchbar: {
        borderRadius: 25,
    }
})
