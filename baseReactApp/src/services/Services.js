import React, { Component } from "react";
import {View, Text, ScrollView, StyleSheet } from "react-native";
import Api from "./Api";



export default class Services extends Component {

  constructor(props) {
    super(props);

    this.state = { lista: [] };

  }


  componentWillMount() {
    
    //Requisição HTTP

    Api.get('services/pesagem/valida3',{key:1})
      .then(response => { console.warn(response); })
      //.then(response => { this.setState({ lista: response.data }); })
      .catch(() => { console.warn('Erro ao recuperar os dados!'); })

      /*bodyFormData = new FormData();
      bodyFormData.set('key', '1');
      Api.request({
        method: 'post',
        url: 'https://pedeoferta.com.br/oferta/welcome/get_sugestao_lista',
        headers: {'Content-Type': 'multipart/form-data' },
        data: bodyFormData}
       
        
        ).then(response => { console.warn(response); })*/
  
}

  render() {
     /*return (
      <ScrollView style={estilo.container}>
        {this.state.lista.map(item => (<Text>{item.lista_cod}</Text>))}
      </ScrollView>
    );*/
   return(
      <View>
      <Text>
        teste
      </Text>
      </View>
    )
  }
}

const estilo = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#DDD'
  }

});
