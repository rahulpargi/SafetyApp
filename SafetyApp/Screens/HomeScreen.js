import React,{Component} from 'react';
<<<<<<< HEAD
import {Text,View,Button,StyleSheet} from 'react-native';
import {Col,Row,Grid} from 'react-native-easy-grid';


=======
import {Text,View,TextInput,TouchableHighlight ,StyleSheet,Button} from 'react-native';
>>>>>>> 146fad466f446e32a2b63e4f7a34e1965cb2a0fe

export default class HomeScreen extends React.Component{
    static navigationOptions =({navigation})=> ({
        title:'HOME',
        headerRight:(
            <TouchableHighlight style={{margin:10}} onPress={()=>navigation.navigate('Home')}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Main Menu</Text>
          </View>
        </TouchableHighlight >
            
      )
    });

    render(){
       
        return(
<<<<<<< HEAD
            <View>
                <Text>Hellofd</Text>
                <Button
                    title="Go to First Screen"
=======

            <View style={styles.container}>  
            

            <View style={{margin:150}}>     
                <Button color="green"
                    title="RAM 5X5"

>>>>>>> 146fad466f446e32a2b63e4f7a34e1965cb2a0fe
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
    },
    button1: {      
        alignItems: 'center',
        backgroundColor: '#2196F3'
      },
      buttonText: {
        padding: 10,
        fontSize:16,
        fontWeight:'bold',      
        color: 'white'
        
      }
    
  });