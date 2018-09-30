import React,{Component} from 'react';
<<<<<<< HEAD
import {Text,View,StyleSheet,Button,TextInput,ScrollView} from 'react-native';



export default class SecondScreeen extends React.Component{
    constructor(props){
        super(props);
        this.state={text1:'',
                    text2:'',
                    sol:0}
    }
    calculate=()=>{
        const {text1,text2}=this.state;
        this.setState({
            sum:Number(text1)*Number(text2)
        });
    }
    static navigationOptions={
        title:'Risk Reducation the Hierarchy of Controls(HOC)',
    };
    render(){
        return(
            <ScrollView  contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-between'
    }} >
            <View style={styles.container}>
                
                <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                <Text>
                    HAZARD 1
                </Text>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{padding:10}}>Risk Level CS   : </Text>
                    <Text style={{padding:10}}>HoC : </Text>
                    <Text style={{padding:10}}>Severity FS   : </Text>
                    <Text style={{padding:10}}>Likelihood  FS : </Text>
                    <Text style={{padding:10}}>Risk Level FS   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 

                    />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    value='Eng.'
                   />
                   <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                        onChangeText={(text1)=>this.setState({text1:text1})}
                        keyboardType="numeric"
                   />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                        onChangeText={(text2)=>this.setState({text2:text2})}
                        keyboardType="numeric"
                        
                    />
                    <TextInput editable={false} underlineColorAndroid='transparent' style={styles.txtinput} 
                       value={`${this.state.sum}`}
                    />
                    </View>
                </View>               
                
                </View>
                  <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                <Text>
                    HAZARD 2
                </Text>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{padding:10}}>Risk Level CS   : </Text>
                    <Text style={{padding:10}}>HoC : </Text>
                    <Text style={{padding:10}}>Severity FS   : </Text>
                    <Text style={{padding:10}}>Likelihood  FS : </Text>
                    <Text style={{padding:10}}>Risk Level FS   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 

                    />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    value='Eng.'
                   />
                   <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                   
                   />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    
                    />
                    <TextInput editable={false} underlineColorAndroid='transparent' style={styles.txtinput} 
                    
                    />
                    </View>
                </View>               
                
                </View>
                <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                <Text>
                    HAZARD 3
                </Text>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{padding:10}}>Risk Level CS   : </Text>
                    <Text style={{padding:10}}>HoC : </Text>
                    <Text style={{padding:10}}>Severity FS   : </Text>
                    <Text style={{padding:10}}>Likelihood  FS : </Text>
                    <Text style={{padding:10}}>Risk Level FS   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 

                    />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    value='Sub.'
                   />
                   <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                   
                   />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    
                    />
                    <TextInput editable={false} underlineColorAndroid='transparent' style={styles.txtinput} 
                    
                    />
                    </View>
                </View>               
                
                </View>
                <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                <Text>
                    HAZARD 4
                </Text>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{padding:10}}>Risk Level CS   : </Text>
                    <Text style={{padding:10}}>HoC : </Text>
                    <Text style={{padding:10}}>Severity FS   : </Text>
                    <Text style={{padding:10}}>Likelihood  FS : </Text>
                    <Text style={{padding:10}}>Risk Level FS   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 

                    />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    value='Eliminate'
                   />
                   <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                   
                   />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    
                    />
                    <TextInput editable={false} underlineColorAndroid='transparent' style={styles.txtinput} 
                    
                    />
                    </View>
                </View>               
                
                </View>
                <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                <Text>
                    HAZARD 5
                </Text>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{padding:10}}>Risk Level CS   : </Text>
                    <Text style={{padding:10}}>HoC : </Text>
                    <Text style={{padding:10}}>Severity FS   : </Text>
                    <Text style={{padding:10}}>Likelihood  FS : </Text>
                    <Text style={{padding:10}}>Risk Level FS   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 

                    />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    value='Eliminate'
                   />
                   <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                   
                   />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    
                    />
                    <TextInput editable={false} underlineColorAndroid='transparent' style={styles.txtinput} 
                    
                    />
                    </View>
                </View>               
                <Button
                 title="Risk Reduction HOC 5x5"
                 onPress={()=>this.props.navigation.navigate('First')}
                 />
                </View>
                
            </View>
            </ScrollView>
         
=======
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
>>>>>>> 146fad466f446e32a2b63e4f7a34e1965cb2a0fe
            
                
            
            
        );
    }
}
<<<<<<< HEAD

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txtinput:{
        height: 40,
        textAlign:'center',
        width:80, 
        borderRadius: 4,
        borderWidth: 1,
         borderColor: '#d6d7da'
    }
  });
=======
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
>>>>>>> 146fad466f446e32a2b63e4f7a34e1965cb2a0fe
