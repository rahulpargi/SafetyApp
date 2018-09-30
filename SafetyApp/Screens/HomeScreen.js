import React,{Component} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';
import {Col,Row,Grid} from 'react-native-easy-grid';



export default class HomeScreen extends React.Component{
    

    render(){
       
        return(
            <View>
                <Text>Hellofd</Text>
                <Button
                    title="Go to First Screen"
                    onPress={()=>this.props.navigation.navigate('First')}
                /></View> 
            
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',       
    },
    button: {
      margin: 100,      
      alignItems: 'center',
      backgroundColor: 'red'
    }
    
  });