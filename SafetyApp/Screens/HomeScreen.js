import React,{Component} from 'react';
//<<<<<<< HEAD

//import {Col,Row,Grid} from 'react-native-easy-grid';
//=======
import {Text,View,TextInput,StyleSheet,Button} from 'react-native';
//>>>>>>> 6da1922d117f620d54a2085f0aca8e06b22a31f3



export default class HomeScreen extends React.Component{
    

    render(){
       
        return(
//<<<<<<< HEAD
   //         <View>
    //            <Text>Hellofd</Text>
       //         <Button
           //         title="Go to First Screen"
//=======
            <View style={styles.container}>  
            

            <View style={{margin:150}}>     
                <Button color="green"
                    title="RAM 5X5"
//>>>>>>> 6da1922d117f620d54a2085f0aca8e06b22a31f3
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