import React, { Component } from 'react';
import { Text,View,StyleSheet,TouchableHighlight,TextInput,ScrollView,Button} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class SecondScreen extends Component {
  static navigationOptions =({navigation})=> ({
    title:'Risk Reduction And The Hierarchy Of Controls (HoC)',
    headerRight:(
        <TouchableHighlight style={{margin:10}} onPress={()=>navigation.navigate('Home')}>
      <View style={styles.button1}>
        <Text style={styles.buttonText}>Main Menu</Text>
      </View>
    </TouchableHighlight >
        
  )
});
  constructor(props) {
    super(props);
    this.state = {
      
      text1:'-',text2:'-',Sol:'2',
            H2text1:'-',H2text2:'-',H2Sol:'',
            H3text1:'-',H3text2:'-',H3Sol:'',
            H4text1:'-',H4text2:'-',H4Sol:'',
            H5text1:'-',H4text2:'-',H5Sol:'',
            backgroundColor:'#fff',H2backgroundColor:'#fff',H3backgroundColor:'#fff',
                    H4backgroundColor:'#fff',H5backgroundColor:'#fff',
      
      
      };
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
    const a=navigation.getParam('a','12');
    const b=navigation.getParam('b1','noid');
    const c=navigation.getParam('c','12');
    const d=navigation.getParam('d','12');
    const e=navigation.getParam('e','12');
    const a1=navigation.getParam('a1','12');
    const a2=navigation.getParam('a2','12');
    const a3=navigation.getParam('a3','12');
    const a4=navigation.getParam('a4','12');
    const a5=navigation.getParam('a5','12');
  
    const tableHead=['Hazard #', 'Hazard 1', 'Hazard 2', 'Hazard 3','Hazard 4','Hazard 5'];
    const tableData= [
      ['Risk Level CS',<Text style={{textAlign:'center',backgroundColor:a1}}>{JSON.stringify(a)}</Text>, <Text style={{textAlign:'center',backgroundColor:a2}}>{JSON.stringify(b)}</Text>, <Text style={{textAlign:'center',backgroundColor:a3}}>{JSON.stringify(c)}</Text>,<Text style={{textAlign:'center',backgroundColor:a4}}>{JSON.stringify(d)}</Text>,<Text style={{textAlign:'center',backgroundColor:a5}}>{JSON.stringify(e)}</Text>],
      ['HoC','Eng.', 'Eng.', 'Sub.','Eliminate','Eliminate'],
      ['Severity FS', <TextInput keyboardType='numeric'  underlineColorAndroid='transparent' style={styles.txtinput} onChangeText={(text1) => this.setState({text1:text1,text2:this.state.text2,Sol:this.Calculate(text1,this.state.text2),backgroundColor:this.random(this.Calculate(text1,this.state.text2))})}
      />,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H2text1) => this.setState({H2text1:H2text1,H2text2:this.state.H2text2,H2Sol:this.Calculate(H2text1,this.state.H2text2),H2backgroundColor:this.random(this.Calculate(H2text1,this.state.H2text2))})}
                    />,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H3text1) => this.setState({H3text1:H3text1,H3text2:this.state.H3text2,H2Sol:this.Calculate(H3text1,this.state.H3text2),H3backgroundColor:this.random(this.Calculate(H3text1,this.state.H3text2))})}
                    />,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H4text1) => this.setState({H4text1:H4text1,H4text2:this.state.H4text2,H4Sol:this.Calculate(H4text1,this.state.H4text2),H4backgroundColor:this.random(this.Calculate(H4text1,this.state.H4text2))})}
                    />,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H5text1) => this.setState({H5text1:H5text1,H5text2:this.state.H5text2,H5Sol:this.Calculate(H5text1,this.state.H5text2),H5backgroundColor:this.random(this.Calculate(H5text1,this.state.H5text2))})}
                    />],
      
      ['Likelihood FS',<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
      onChangeText={(text2) => this.setState({text2:text2,text1:this.state.text1,Sol:this.Calculate(text2,this.state.text1),backgroundColor:this.random(this.Calculate(this.state.text1,text2))})}
      />,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
      onChangeText={(H2text2) => this.setState({H2text2:H2text2,H2text1:this.state.H2text1,H2Sol:this.Calculate(H2text2,this.state.H2text1),H2backgroundColor:this.random(this.Calculate(this.state.H2text1,H2text2))})}
      /> , <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
      onChangeText={(H3text2) => this.setState({H3text2:H3text2,H3text1:this.state.H3text1,H3Sol:this.Calculate(H3text2,this.state.H3text1),H3backgroundColor:this.random(this.Calculate(this.state.H3text1,H3text2))})}
      /> ,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
      onChangeText={(H4text2) => this.setState({H4text2:H4text2,H4text1:this.state.H4text1,H4Sol:this.Calculate(H4text2,this.state.H4text1),H4backgroundColor:this.random(this.Calculate(this.state.H4text1,H4text2))})}
      />,<TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
      onChangeText={(H5text2) => this.setState({H5text2:H5text2,H5text1:this.state.H5text1,H5Sol:this.Calculate(H5text2,this.state.H5text1),H5backgroundColor:this.random(this.Calculate(this.state.H5text1,H5text2))})}
      />],
      ['Risk Level FS',<TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.backgroundColor}]} 
      value={`${this.Calculate(this.state.text1,this.state.text2)}`}
      />   , <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H2backgroundColor}]} 
      value={`${this.Calculate(this.state.H2text1,this.state.H2text2)}`}
      />  , <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H3backgroundColor}]} 
      value={`${this.Calculate(this.state.H3text1,this.state.H3text2)}`}
      />  ,<TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H4backgroundColor}]} 
      value={`${this.Calculate(this.state.H4text1,this.state.H4text2)}`}
      /> ,<TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H5backgroundColor}]} 
      value={`${this.Calculate(this.state.H4text1,this.state.H4text2)}`}
      /> ],
    ];
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table>
        
        
        <View>
          <Button title="RAM FS 5x5" onPress={()=>this.props.navigation.navigate('Third',{a:this.state.Sol,b1:this.state.H2Sol,c:this.state.H3Sol,d:this.state.H4Sol,e:this.state.H5Sol,a1:this.state.backgroundColor,a2:this.state.H2backgroundColor,a3:this.state.H3backgroundColor,a4:this.state.H4backgroundColor,a5:this.state.H5backgroundColor})}/>
      </View>
      <View>
          <Button title="Back to RAM 5x5 CS" onPress={()=>this.props.navigation.navigate('First')}/>
      </View>
        <Text>{JSON.stringify(b)}</Text>
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 ,justifyContent:'center', backgroundColor: '#fff' },
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
