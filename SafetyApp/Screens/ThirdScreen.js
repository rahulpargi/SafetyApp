import React,{Component} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native'

export default class ThirdScreeen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    This is the Final Screen
                    
                </Text>
                <Button
                        title="Go Back"
                        onPress={()=>this.props.navigation.navigate('Home')}
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