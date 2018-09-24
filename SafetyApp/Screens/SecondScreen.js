import React,{Component} from 'react';
//import {Text,View,StyleSheet,Button} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export default class SecondScreeen extends React.Component{
    static navigationOptions={
        title:'Risk Reducation the Hierarchy of Controls(HOC)',
    };
    render(){
        return(
            // <View style={styles.container}>
            //     <Text>
            //         This is the second Screen
            //     </Text>
            //     <Button
            //      title="RAM FS 5x5"
            //      onPress={()=>this.props.navigation.navigate('Third')}
            //     />
            //     <Button
            //         title="Back to RAM 5x5 CS"
            //         onPress={()=>this.props.navigation.navigate('First')}
            //     />
            // </View>
            <Container>
            <Header />
            <Content>
              <Card>
                <CardItem header>
                  <Text>NativeBase</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      //Your text here
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>GeekyAnts</Text>
                </CardItem>
             </Card>
            </Content>
          </Container>
            
                
            
            
        );
    }
}

