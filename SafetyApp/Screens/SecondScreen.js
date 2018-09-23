import React,{Component} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native'

export default class SecondScreeen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    This is the second Screen
                </Text>
                <Button
                 title="RAM FS 5x5"
                 onPress={()=>this.props.navigation.navigate('Third')}
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