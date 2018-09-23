import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';



export default class HomeScreen extends React.Component{
    

    render(){
       
        return(
            <View>
                <Text>Hello</Text>
                <Button
                    title="Go to First Screen"
                    onPress={()=>this.props.navigation.navigate('First')}
                />
            </View>
        );
    }

}
