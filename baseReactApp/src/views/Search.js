import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { List } from 'react-native-paper';


export default props => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const onChangeSearch = query => setSearchQuery(query)

    return (
    <ScrollView>
        <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
            title="Second Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
            title="Third Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
            title="Fourth Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
        />
    </ScrollView>
    )
}
