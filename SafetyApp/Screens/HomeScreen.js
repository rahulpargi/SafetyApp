import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';
import {Col,Row,Grid} from 'react-native-easy-grid';



export default class HomeScreen extends React.Component{
    

    render(){
       
        return(
            <View>
                <Text>Hellofd</Text>
                <Button
                    title="Go to First Screen"
                    onPress={()=>this.props.navigation.navigate('First')}
                />
            </View>
        );
    }

}
