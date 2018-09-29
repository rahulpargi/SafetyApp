import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableHighlight,Button} from 'react-native';
//import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export default class SecondScreeen extends React.Component{
    
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
             <View >
                 <Text>
                     This is the second Screen
                 </Text>
                 <Button
                  title="RAM FS 5x5"
                  onPress={()=>this.props.navigation.navigate('Third')}
                 />
                 <Button
                     title="Back to RAM 5x5 CS"
                     onPress={()=>this.props.navigation.navigate('First')}
                 />
             </View>
         /*   <Container>
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
          </Container>*/
            
                
            
            
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
