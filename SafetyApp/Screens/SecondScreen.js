import React, { Component } from 'react';
import { Text,View,StyleSheet,AsyncStorage,TouchableHighlight,TextInput,ScrollView,Button} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import {Header,Icon} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class SecondScreen extends Component {
  static navigationOptions =({navigation})=> ({
   
    header:(<Header
      statusBarProps={{ barStyle: 'light-content' }}
      barStyle="light-content" // or directly
      outerContainerStyles={{height:90}}
      leftComponent={<Icon name="arrow-back" color="#fff" underlayColor='transparent' onPress={()=>navigation.navigate('First')}></Icon>}
      centerComponent={{ text: 'RR HoC 5x5', style: { color: '#fff',fontWeight:"bold",fontSize:16 } }}
      containerStyle={{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
       
      }}
      rightComponent={<Icon name="home" color="#fff" underlayColor='transparent' onPress={()=>navigation.navigate('Home')}></Icon>}
    />)
});
  constructor(props) {
    super(props);
    this.state = {
      
      text1:'-',text2:'-',Sol:'',
      H2text1:'',H2text2:'',H2text3:'',
            H3text1:'-',H3text2:'-',H3Sol:'',
            H4text1:'-',H4text2:'-',H4Sol:'',
            H5text1:'-',H4text2:'-',H5Sol:'',
            H1backgroundColor:'#fff',H2backgroundColor:'#fff',H3backgroundColor:'#fff',
                    H4backgroundColor:'#fff',H5backgroundColor:'#fff',
      
      
      };
    }
    componentDidMount() {
        
      AsyncStorage.getItem("Sev").then((value) => {
       this.setState({"text1": value});
      
      }).done();
      AsyncStorage.getItem("Like").then((value) => {
          this.setState({"text2": value});
         this.setState({H1backgroundColor:this.random(this.Calculate(this.state.text1,this.state.text2))});
         this.setState({H1Sol:this.Calculate(this.state.text2,this.state.text1)});
         }).done();
         AsyncStorage.getItem("H2Sev").then((value) => {
          this.setState({"H2text1": value});
          
         }).done();
         AsyncStorage.getItem("H2Like").then((value) => {
          this.setState({"H2text2": value});
          this.setState({H2backgroundColor:this.random(this.Calculate(this.state.H2text1,this.state.H2text2))});
          this.setState({H2Sol:this.Calculate(this.state.H2text2,this.state.H2text1)});
         }).done();
         AsyncStorage.getItem("H3Sev").then((value) => {
          this.setState({"H3text1": value});
          
         }).done();
         AsyncStorage.getItem("H3Like").then((value) => {
          this.setState({"H3text2": value});
          this.setState({H3backgroundColor:this.random(this.Calculate(this.state.H3text1,this.state.H3text2))});
          this.setState({H3Sol:this.Calculate(this.state.H3text2,this.state.H3text1)});
         }).done();
         AsyncStorage.getItem("H4Sev").then((value) => {
          this.setState({"H4text1": value});
         }).done();
         AsyncStorage.getItem("H4Like").then((value) => {
          this.setState({"H4text2": value});
        
          this.setState({H4backgroundColor:this.random(this.Calculate(this.state.H4text2,this.state.H4text1))});
          this.setState({H4Sol:this.Calculate(this.state.H4text2,this.state.H4text1)});
         }).done();
         AsyncStorage.getItem("H5Sev").then((value) => {
          this.setState({"H5text1": value});
         }).done();
         AsyncStorage.getItem("H5Like").then((value) => {
          this.setState({"H5text2": value});
          this.setState({H5backgroundColor:this.random(this.Calculate(this.state.H5text1,this.state.H5text2))});
         this.setState({H5Sol:this.Calculate(this.state.H5text2,this.state.H5text1)});
         }).done();
         
        
         
         
    } 
    H1Severity(itemValue) {
    
      AsyncStorage.setItem("Sev", itemValue);
     this.setState({text1:itemValue,text2:this.state.text2,H1Sol:this.Calculate(itemValue,this.state.text2),
      H1backgroundColor:this.random(this.Calculate(itemValue,this.state.text2))});
      
      
    }
    H2Severity(itemValue3){
          
      AsyncStorage.setItem("H2Sev", itemValue3);
      this.setState({H2text1:itemValue3,H2text2:this.state.H2text2,H2Sol:this.Calculate(itemValue3,this.state.H2text2),H2backgroundColor:this.random(this.Calculate(itemValue3,this.state.H2text2))});
      AsyncStorage.setItem("H2backgroundColor",this.state.H2backgroundColor);
      
  }
  H3Severity(itemValue4){
    AsyncStorage.setItem("H3Sev", itemValue4);
    this.setState({H3text1:itemValue4,H3text2:this.state.H3text2,H3Sol:this.Calculate(itemValue4,this.state.H3text2),H3backgroundColor:this.random(this.Calculate(itemValue4,this.state.H3text2))});
    AsyncStorage.setItem("H3backgroundColor",this.state.H3backgroundColor);
}
H4Severity(itemValue6){
  AsyncStorage.setItem("H4Sev", itemValue6);
  this.setState({H4text1:itemValue6,H4text2:this.state.H4text2,H4Sol:this.Calculate(itemValue6,this.state.H4text2),H4backgroundColor:this.random(this.Calculate(itemValue6,this.state.H4text2))});
  AsyncStorage.setItem("H4backgroundColor",this.state.H4backgroundColor);
}
H5Severity(itemValue8){
  AsyncStorage.setItem("H5Sev", itemValue8);
  this.setState({H5text1:itemValue8,H5text2:this.state.H5text2,H5Sol:this.Calculate(itemValue8,this.state.H5text2),H5backgroundColor:this.random(this.Calculate(itemValue8,this.state.H5text2))})
  AsyncStorage.setItem("H5backgroundColor",this.state.H5backgroundColor);
}
H1Likelyhood(itemValue1){
  AsyncStorage.setItem("Like", itemValue1);
  this.setState({text2:itemValue1,text1:this.state.text1,H1Sol:this.Calculate(itemValue1,this.state.text1),H1backgroundColor:this.random(this.Calculate(this.state.text1,itemValue1))});
  
}
H2Likelyhood(itemValue4){
  AsyncStorage.setItem("H2Like", itemValue4);
  this.setState({H2text2:itemValue4,H2text1:this.state.H2text1,H2Sol:this.Calculate(itemValue4,this.state.H2text1),H2backgroundColor:this.random(this.Calculate(this.state.H2text1,itemValue4))});
  AsyncStorage.setItem("H2backgroundColor",this.state.H2backgroundColor);
}
H3Likelyhood(itemValue5){
  AsyncStorage.setItem("H3Like", itemValue5);
  this.setState({H3text2:itemValue5,H3text1:this.state.H3text1,H3Sol:this.Calculate(itemValue5,this.state.H3text1),H3backgroundColor:this.random(this.Calculate(this.state.H3text1,itemValue5))})
  AsyncStorage.setItem("H3backgroundColor",this.state.H3backgroundColor);
}
H4Likelyhood(itemValue7){
  AsyncStorage.setItem("H4Like", itemValue7);
  this.setState({H4text2:itemValue7,H4text1:this.state.H4text1,H4Sol:this.Calculate(itemValue7,this.state.H4text1),H4backgroundColor:this.random(this.Calculate(this.state.H4text1,itemValue7))})
  AsyncStorage.setItem("H4backgroundColor",this.state.H4backgroundColor);
}
H5Likelyhood(itemValue9){
  AsyncStorage.setItem("H5Like", itemValue9);
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
      else if(Sol<=4 && Sol>=1)
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
    
  

  render() {
    const {navigation}=this.props;
    const H2text1=navigation.getParam('H2text1','12');
    const H2text2=navigation.getParam('b1','noid');
    const H2text3=navigation.getParam('H2Sol','12');
    const d=navigation.getParam('d','12');
    const e=navigation.getParam('e','12');
    const a1=navigation.getParam('a1','12');
    const a2=navigation.getParam('a2','12');
    const a3=navigation.getParam('a3','12');
    const a4=navigation.getParam('a4','12');
    const a5=navigation.getParam('a5','12');
   
  
    const tableHead=['Hazard #', 'Hazard 1', 'Hazard 2', 'Hazard 3','Hazard 4','Hazard 5'];
    const tableData= [
      ['Risk Level CS',<Text style={{textAlign:'center',backgroundColor:a1,textAlign:'center'}}>{JSON.stringify(H2text1)}</Text>, <Text style={{textAlign:'center',backgroundColor:a2}}>{JSON.stringify(H2text2)}</Text>, <Text style={{textAlign:'center',backgroundColor:a3}}>{JSON.stringify(H2text3)}</Text>,<Text style={{textAlign:'center',backgroundColor:a4}}>{JSON.stringify(d)}</Text>,<Text style={{textAlign:'center',backgroundColor:a5}}>{JSON.stringify(e)}</Text>],
      ['HoC','Eng.', 'Eng.', 'Sub.','Eliminate','Eliminate'],
      ['Severity FS', <TextInput keyboardType='numeric'  underlineColorAndroid='transparent' style={{textAlign:'center'}} onChangeText={(text1) => this.H1Severity(text1)}
      value={this.state.text1}/>, <TextInput keyboardType='numeric'  underlineColorAndroid='transparent' style={{textAlign:'center'}} 
      onChangeText={(H2text1) => this.H2Severity(H2text1)} value={this.state.H2text1}
      />,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={{textAlign:'center'}} 
                    onChangeText={(H3text1) => this.H3Severity(H3text1)}
                    value ={this.state.H3text1}/>,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={{textAlign:'center'}}
                    onChangeText={(H4text1) =>this.H4Severity(H4text1) }
                    value={this.state.H4text1}/>,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={{textAlign:'center'}}
                    onChangeText={(H5text1) =>this.H5Severity(H5text1) }
                    value={this.state.H5text1}/>],
      
      ['Likelihood FS',<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={{textAlign:'center'}}
      onChangeText={(text2) => this.H1Likelyhood(text2)}
      value={this.state.text2}/>,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={{textAlign:'center'}}
      onChangeText={(H2text2) => this.H2Likelyhood(H2text2)}
      value={this.state.H2text2}/> , <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={{textAlign:'center'}}
      onChangeText={(H3text2) => this.H3Likelyhood(H3text2)}
      value={this.state.H3text2}/> ,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={{textAlign:'center'}}
      onChangeText={(H4text2) => this.H4Likelyhood(H4text2)}
      value={this.state.H4text2}/>,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={{textAlign:'center'}}
      onChangeText={(H5text2) => this.H5Likelyhood(H5text2)}
      value={this.state.H5text2}/>],
      ['Risk Level FS',<TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H1backgroundColor}]} 
      value={`${this.Calculate(this.state.text1,this.state.text2)}`}
      />   , <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H2backgroundColor}]} 
      value={`${this.Calculate(this.state.H2text1,this.state.H2text2)}`}
      />  , <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H3backgroundColor}]} 
      value={`${this.Calculate(this.state.H3text1,this.state.H3text2)}`}
      />  ,<TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H4backgroundColor}]} 
      value={`${this.Calculate(this.state.H4text1,this.state.H4text2)}`}
      /> ,<TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H5backgroundColor}]} 
      value={`${this.Calculate(this.state.H5text1,this.state.H5text2)}`}
      /> ],
    ];
    return (
      <KeyboardAwareScrollView
      style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table>
        
          <View >
            <Button title="RAM FS 5x5" onPress={()=>this.props.navigation.navigate('Third',{a:this.state.H1Sol,b1:this.state.H2Sol,c:this.state.H3Sol,d:this.state.H4Sol,e:this.state.H5Sol,a1:this.state.H1backgroundColor,a2:this.state.H2backgroundColor,a3:this.state.H3backgroundColor,a4:this.state.H4backgroundColor,a5:this.state.H5backgroundColor,b11:H2text1,b2:H2text2,b3:H2text3,b4:d,b5:e,b6:a1,b7:a2,b8:a3,b9:a4,b10:a5})}/>
          </View>
          <View >
            <Button title="Back to RAM 5x5 CS" onPress={()=>this.props.navigation.navigate('First')}/>
          </View>
      </View>
      </KeyboardAwareScrollView>
     
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 20 ,justifyContent:'space-between', backgroundColor: '#fff',flexDirection:'column' },
  
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' },
  loginButtonSection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
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
