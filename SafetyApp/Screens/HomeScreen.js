import React,{Component} from 'react';
import {Text,View,TextInput,StyleSheet,Button} from 'react-native';



export default class HomeScreen extends React.Component{
    

    render(){
       
        return(
            <View style={styles.container}>  
            

            <View style={{margin:150}}>     
                <Button color="green"
                    title="RAM 5X5"
                    onPress={()=>this.props.navigation.navigate('First')}
                /></View> 
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
    }
    
  });