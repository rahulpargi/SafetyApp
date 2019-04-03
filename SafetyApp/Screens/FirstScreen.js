import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableHighlight,AsyncStorage,TextInput,Keyboard,ScrollView,Button,Picker} from 'react-native'

import {Header,Icon} from 'react-native-elements'

export default class SecondScreeen extends React.Component{
    static navigationOptions =({navigation})=> ({
       
        
        header:(<Header
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content" // or directly
            outerContainerStyles={{height:100}}
            leftComponent={<Icon name="arrow-back" color="#fff" underlayColor='transparent' onPress={()=>navigation.navigate('Home')}></Icon>}
            centerComponent={{ text: 'RAM CS 5x5', style: { color: '#fff',fontWeight:"bold",fontSize:16 } }}
            containerStyle={{
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
             
            }}
            rightComponent={<Icon name="home" color="#fff" underlayColor='transparent' onPress={()=>navigation.navigate('Home')}></Icon>}
          />)
      
        
        
    });
    constructor(props) {
        super(props);
        this.state = {text1:'',text2:'',H1Sol:'',aa:'',
           H2text1:'',H2text2:'',H2Sol:'',
           H3text1:'-',H3text2:'-',H3Sol:'',
            H4text1:'-',H4text2:'-',H4Sol:'',
            H5text1:'-',H4text2:'-',H5Sol:''
        };
        this.state = {H1backgroundColor:'#fff',H2backgroundColor:'#fff',H3backgroundColor:'#fff',
                    H4backgroundColor:'#fff',H5backgroundColor:'#fff'
                    };        
         
   }
   componentDidMount() {
        
    AsyncStorage.getItem("text1").then((value) => {
     this.setState({"text1": value});
    
    }).done();
    AsyncStorage.getItem("text2").then((value) => {
        this.setState({"text2": value});
        this.setState({H1backgroundColor:this.random(this.Calculate(this.state.text1,this.state.text2))});
        this.setState({H1Sol:this.Calculate(this.state.text2,this.state.text1)});
       }).done();
       AsyncStorage.getItem("H2text1").then((value) => {
        this.setState({"H2text1": value});
       }).done();
       AsyncStorage.getItem("H2text2").then((value) => {
        this.setState({"H2text2": value});
        this.setState({H2backgroundColor:this.random(this.Calculate(this.state.H2text1,this.state.H2text2))});
        this.setState({H2Sol:this.Calculate(this.state.H2text2,this.state.H2text1)});
       }).done();
       AsyncStorage.getItem("H3text1").then((value) => {
        this.setState({"H3text1": value});
        
       }).done();
       AsyncStorage.getItem("H3text2").then((value) => {
        this.setState({"H3text2": value});
        this.setState({H3backgroundColor:this.random(this.Calculate(this.state.H3text1,this.state.H3text2))});
        this.setState({H3Sol:this.Calculate(this.state.H3text2,this.state.H3text1)});
       }).done();
       AsyncStorage.getItem("H4text1").then((value) => {
        this.setState({"H4text1": value});
       }).done();
       AsyncStorage.getItem("H4text2").then((value) => {
        this.setState({"H4text2": value});
        this.setState({H4backgroundColor:this.random(this.Calculate(this.state.H4text2,this.state.H4text2))});
        this.setState({H4Sol:this.Calculate(this.state.H4text2,this.state.H4text1)});
       }).done();
       AsyncStorage.getItem("H5text1").then((value) => {
        this.setState({"H5text1": value});
       }).done();
       AsyncStorage.getItem("H5text2").then((value) => {
        this.setState({"H5text2": value});
        this.setState({H5backgroundColor:this.random(this.Calculate(this.state.H5text1,this.state.H5text2))});
        this.setState({H5Sol:this.Calculate(this.state.H5text2,this.state.H5text1)});
       }).done();
       
      
       
       
  } 
  //onValueChange={(itemValue, itemIndex) => this.setState({text1:itemValue,text2:this.state.text2,Sol:this.Calculate(itemValue,this.state.text2),backgroundColor:this.random(this.Calculate(itemValue,this.state.text2))})}>
  H1Severity(itemValue) {
    
        AsyncStorage.setItem("text1", itemValue);
       this.setState({text1:itemValue,text2:this.state.text2,H1Sol:this.Calculate(itemValue,this.state.text2),
        H1backgroundColor:this.random(this.Calculate(itemValue,this.state.text2))});
        
        
      }
      H1Likelyhood(itemValue1){
        AsyncStorage.setItem("text2", itemValue1);
        this.setState({text2:itemValue1,text1:this.state.text1,H1Sol:this.Calculate(itemValue1,this.state.text1),H1backgroundColor:this.random(this.Calculate(this.state.text1,itemValue1))});
        
    }
      H2Severity(itemValue3){
          
        AsyncStorage.setItem("H2text1", itemValue3);
        this.setState({H2text1:itemValue3,H2text2:this.state.H2text2,H2Sol:this.Calculate(itemValue3,this.state.H2text2),H2backgroundColor:this.random(this.Calculate(itemValue3,this.state.H2text2))});
        AsyncStorage.setItem("H2backgroundColor",this.state.H2backgroundColor);
    }
      
      H2Likelyhood(itemValue4){
        AsyncStorage.setItem("H2text2", itemValue4);
        this.setState({H2text2:itemValue4,H2text1:this.state.H2text1,H2Sol:this.Calculate(itemValue4,this.state.H2text1),H2backgroundColor:this.random(this.Calculate(this.state.H2text1,itemValue4))});
        AsyncStorage.setItem("H2backgroundColor",this.state.H2backgroundColor);
    }
      H3Severity(itemValue4){
        AsyncStorage.setItem("H3text1", itemValue4);
        this.setState({H3text1:itemValue4,H3text2:this.state.H3text2,H3Sol:this.Calculate(itemValue4,this.state.H3text2),H3backgroundColor:this.random(this.Calculate(itemValue4,this.state.H3text2))});
        AsyncStorage.setItem("H3backgroundColor",this.state.H3backgroundColor);
    }
    
    H3Likelyhood(itemValue5){
        AsyncStorage.setItem("H3text2", itemValue5);
        this.setState({H3text2:itemValue5,H3text1:this.state.H3text1,H3Sol:this.Calculate(itemValue5,this.state.H3text1),H3backgroundColor:this.random(this.Calculate(this.state.H3text1,itemValue5))})
        AsyncStorage.setItem("H3backgroundColor",this.state.H3backgroundColor);
    }

    H4Severity(itemValue6){
        AsyncStorage.setItem("H4text1", itemValue6);
        this.setState({H4text1:itemValue6,H4text2:this.state.H4text2,H4Sol:this.Calculate(itemValue6,this.state.H4text2),H4backgroundColor:this.random(this.Calculate(itemValue6,this.state.H4text2))});
        AsyncStorage.setItem("H4backgroundColor",this.state.H4backgroundColor);
    }
    
    H4Likelyhood(itemValue7){
        AsyncStorage.setItem("H4text2", itemValue7);
        this.setState({H4text2:itemValue7,H4text1:this.state.H4text1,H4Sol:this.Calculate(itemValue7,this.state.H4text1),H4backgroundColor:this.random(this.Calculate(this.state.H4text1,itemValue7))})
        AsyncStorage.setItem("H4backgroundColor",this.state.H4backgroundColor);
    }
    H5Severity(itemValue8){
        AsyncStorage.setItem("H5text1", itemValue8);
        this.setState({H5text1:itemValue8,H5text2:this.state.H5text2,H5Sol:this.Calculate(itemValue8,this.state.H5text2),H5backgroundColor:this.random(this.Calculate(itemValue8,this.state.H5text2))})
        AsyncStorage.setItem("H5backgroundColor",this.state.H5backgroundColor);
    }
    
    H5Likelyhood(itemValue9){
        AsyncStorage.setItem("H5text2", itemValue9);
        this.setState({H5text2:itemValue9,H5text1:this.state.H5text1,H5Sol:this.Calculate(itemValue9,this.state.H5text1),H5backgroundColor:this.random(this.Calculate(this.state.H5text1,itemValue9))})
        AsyncStorage.setItem("H5backgroundColor",this.state.H5backgroundColor);
    }


      random(Sol){
          
          if(Sol==''){
            return '#fff'
          }
          else if(Sol>=15 && Sol<=25){
            
            return "#c60909"
          }
          else if(Sol>=9 ){
            return "#f7551b"
          }
          else if(Sol<9 && Sol>=6){
            return "#e5df27"
          }
          else if(Sol<=5 && Sol>=1)
          {
            return "#34c96b"
          }
          else {
              return "#c60909"
          }
      }
    Calculate(text1,text2)
        {   
            
            if(text1=='-' || text2=='-'){
                return '';
            }
            else if(text1==''||text2=='')
            {
                return '';
            }
            else if(text1==undefined||text2==undefined)
            {
                return '';
            }
            else{
               
                
                return text1 * text2
            }
        }
        
    render(){
        const t=this.state.H2Sol;
        
        return(
            
            
            <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{alignItems:'center',backgroundColor:'#fff'}} >
                
                <Text style={{marginTop:20}}>
                    HAZARD 1
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:10}}>SEVERITY   : </Text>
                    <Text style={{margin:10}}>Likelyhood : </Text>
                    <Text style={{margin:10}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    
                    <Picker
                        selectedValue={this.state.text1}
                        //style={styles.txtinput}

                     //  onValueChange={(itemValue, itemIndex) => this.setState({text1:itemValue,text2:this.state.text2,Sol:this.Calculate(itemValue,this.state.text2),backgroundColor:this.random(this.Calculate(itemValue,this.state.text2))})}>
                     onValueChange={(itemValue, itemIndex) => this.H1Severity(itemValue)}>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.text2}
                        //style={styles.txtinput}
                        onValueChange={(itemValue1, itemIndex) => this.H1Likelyhood(itemValue1)}>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    
                               
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H1backgroundColor}]} 
                    value={`${this.Calculate(this.state.text1,this.state.text2)}`}
                    />         
                    
                    </View>                   
                </View>   
                <Text style={{marginTop:10}}>
                    HAZARD 2
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:10}}>SEVERITY   : </Text>
                    <Text style={{margin:10}}>Likelyhood : </Text>
                    <Text style={{margin:10}}>Risk Level   : </Text>
                    </View>
                   
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Picker
                        selectedValue={this.state.H2text1}
                        //style={styles.txtinput}
                        onValueChange={(itemValue3, itemIndex) => this.H2Severity(itemValue3)}>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.H2text2}
                        //style={styles.txtinput}
                        onValueChange={(itemValue4, itemIndex) =>this.H2Likelyhood(itemValue4)}>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                   
                   
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H2backgroundColor}]} 
                    value={`${this.Calculate(this.state.H2text1,this.state.H2text2)}`}
                    />                  
                    
                    </View>                   
                </View>   
                  
                <Text style={{marginTop:10}}>
                    HAZARD 3
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:10}}>SEVERITY   : </Text>
                    <Text style={{margin:10}}>Likelyhood : </Text>
                    <Text style={{margin:10}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Picker
                        selectedValue={this.state.H3text1}
                        //style={styles.txtinput}
                        onValueChange={(itemValue4, itemIndex) => this.H3Severity(itemValue4)}>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.H3text2}
                        //style={styles.txtinput}
                        onValueChange={(itemValue5, itemIndex) => this.H3Likelyhood(itemValue5) }>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                   
                    
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H3backgroundColor}]} 
                    value={`${this.Calculate(this.state.H3text1,this.state.H3text2)}`}
                    />                   
                    </View>                   
                </View>                     
                <Text style={{marginTop:10}}>
                    HAZARD 4
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:10}}>SEVERITY   : </Text>
                    <Text style={{margin:10}}>Likelyhood : </Text>
                    <Text style={{margin:10}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Picker
                        selectedValue={this.state.H4text1}
                        //style={styles.txtinput}
                        onValueChange={(itemValue6, itemIndex) => this.H4Severity(itemValue6)}>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.H4text2}
                        //style={styles.txtinput}
                        onValueChange={(itemValue7, itemIndex) =>this.H4Likelyhood(itemValue7)}>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    
                    
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H4backgroundColor}]} 
                    value={`${this.Calculate(this.state.H4text1,this.state.H4text2)}`}
                    />                   
                    </View>                   
                </View>                     
                <Text style={{marginTop:10}}>
                    HAZARD 5
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:10}}>SEVERITY   : </Text>
                    <Text style={{margin:10}}>Likelyhood : </Text>
                    <Text style={{margin:10}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Picker
                        selectedValue={this.state.H5text1}
                        //style={styles.txtinput}
                        onValueChange={(itemValue8, itemIndex) =>this.H5Severity(itemValue8)}>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.H5text2}
                        //style={styles.txtinput}
                        onValueChange={(itemValue9, itemIndex) =>this.H5Likelyhood(itemValue9)}>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    
                   
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H5backgroundColor}]} 
                    value={`${this.Calculate(this.state.H5text1,this.state.H5text2)}`}
                    />                   
                    </View>                   
                </View>   
                                                 
                   
                <Button style={{padding:30,marginTop:15,marginBottom:20}}
                 title="Risk Reduction HOc 5x5"
                 onPress={()=>this.props.navigation.navigate('Second',{H2text1:this.state.H1Sol,b1:this.state.H2Sol,H2Sol:this.state.H3Sol,d:this.state.H4Sol,e:this.state.H5Sol,a1:this.state.H1backgroundColor,a2:this.state.H2backgroundColor,a3:this.state.H3backgroundColor,a4:this.state.H4backgroundColor,a5:this.state.H5backgroundColor})}
                 />

                 <View style={{height:40}}>

                 </View>
                
                </ScrollView>
            
            

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
    txtinput:{
        height: 30,
        textAlign:'center',
        width:80, 
        margin:5,
        borderRadius: 4,
        borderWidth: 1,
         borderColor: '#d6d7da'
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