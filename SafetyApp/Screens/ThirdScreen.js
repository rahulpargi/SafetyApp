import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableHighlight,Button} from 'react-native';
//import {Col,Row,Grid} from 'react-native-easy-grid';

export default class ThirdScreeen extends React.Component{
    
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
                <Text>
                    This is the Final Screen
                    
                </Text>
                <Button
                        title="Back to RR 5x5 HoC"
                        onPress={()=>this.props.navigation.navigate('Second')}
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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