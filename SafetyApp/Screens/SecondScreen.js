import React, { Component } from 'react';
import { StyleSheet, View ,TextInput,Button} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ExampleOne extends Component {
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
  
    const tableHead=['Hazard #', 'Hazard 1', 'Hazard 2', 'Hazard 3','Hazard 4','Hazard 5'];
    const tableData= [
      ['Risk Level CS','', '', '','',''],
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
        
       
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 ,justifyContent:'center' },
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
 }

});
