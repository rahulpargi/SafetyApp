import React,{Component} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
//import {Col,Row,Grid} from 'react-native-easy-grid';

export default class ThirdScreeen extends React.Component{
    static navigationOptions={
        title:'Semi-Quantitative Risk (5x5) Matric Example - Future State',
    }
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
  });