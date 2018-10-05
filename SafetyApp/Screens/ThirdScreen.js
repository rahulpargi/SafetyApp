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
      a:'',b:'',c:'',
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
    //First Screen Parameters
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
    //Second Screen Parameters
    const b1=navigation.getParam('b11','no');
    const b2=navigation.getParam('b2','noid');
    const b3=navigation.getParam('b3','no');
    const b4=navigation.getParam('b4','no');
    const b5=navigation.getParam('b5','no');
    const b6=navigation.getParam('b6','no');
    const b7=navigation.getParam('b7','no');
    const b8=navigation.getParam('b8','no');
    const b9=navigation.getParam('b9','no');
    const b10=navigation.getParam('b10','no');
    console.log(b10);
    const tableHead=['Hazard #', 'Hazard 1', 'Hazard 2', 'Hazard 3','Hazard 4','Hazard 5'];
    const tableData= [
      ['Risk Level CS',<Text style={{textAlign:'center',backgroundColor:b6}}>{JSON.stringify(b1)}</Text>, <Text style={{textAlign:'center',backgroundColor:b7}}>{JSON.stringify(b2)}</Text>, <Text style={{textAlign:'center',backgroundColor:b8}}>{JSON.stringify(b3)}</Text>,<Text style={{textAlign:'center',backgroundColor:b9}}>{JSON.stringify(b4)}</Text>,<Text style={{textAlign:'center',backgroundColor:b10}}>{JSON.stringify(b5)}</Text>],
      ['HoC','Eng.', 'Eng.', 'Sub.','Eliminate','Eliminate'],
      ['Risk Level FS',<Text style={{textAlign:'center',backgroundColor:a1}}>{JSON.stringify(a)}</Text>, <Text style={{textAlign:'center',backgroundColor:a2}}>{JSON.stringify(b)}</Text>, <Text style={{textAlign:'center',backgroundColor:a3}}>{JSON.stringify(c)}</Text>,<Text style={{textAlign:'center',backgroundColor:a4}}>{JSON.stringify(d)}</Text>,<Text style={{textAlign:'center',backgroundColor:a5}}>{JSON.stringify(e)}</Text>],
      
      ['Risk Reduction',<Text  style={{textAlign:'center'}}>{((b1-a)/b1)*100+"%"}</Text>,<Text  style={{textAlign:'center'}}>{((b2-b)/b2)*100+"%"}</Text>,<Text  style={{textAlign:'center'}}>{((b3-c)/b3)*100+"%"}</Text>,<Text  style={{textAlign:'center'}}>{((b4-d)/b4)*100+"%"}</Text>,<Text  style={{textAlign:'center'}}>{((b5-e)/b5)*100+"%"}</Text>],
      ['Residual Risk',<Text  style={{textAlign:'center'}}>{(100-((b1-a)/b1)*100)+"%"}</Text>,<Text  style={{textAlign:'center'}}>{(100-((b2-b)/b2)*100)+"%"}</Text>,<Text  style={{textAlign:'center'}}>{(100-((b3-c)/b3)*100)+"%"}</Text>,<Text  style={{textAlign:'center'}}>{(100-((b4-d)/b4)*100)+"%"}</Text>,<Text  style={{textAlign:'center'}}>{(100-((b5-e)/b5)*100)+"%"}</Text>],
    ];
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table>
        
       
      <View>
          <Button title="Back to RR 5x5 HoC" onPress={()=>this.props.navigation.navigate('First')}/>
      </View>
        
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
