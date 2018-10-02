import React,{Component} from 'react';
import {Text,View,Button,StyleSheet,TextInput,TouchableHighlight} from 'react-native';




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

            <View style={styles.container}>  
            

            <View style={{margin:150}}>     
                <Button color="green"
                    title="RAM 5X5"

                    onPress={()=>this.props.navigation.navigate('First')}
                />
            </View> 
            </View>
            
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