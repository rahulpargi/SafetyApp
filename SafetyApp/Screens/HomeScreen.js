import React,{Component} from 'react';
import {Switch,Text,View,KeyboardAvoidingView,AsyncStorage,ScrollView,TouchableOpacity,Image,Button,StyleSheet,TextInput,TouchableHighlight} from 'react-native';
import {Header, Icon} from 'react-native-elements'
import DatePicker from 'react-native-datepicker';

import MyView from './MyView';


export default class HomeScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isHidden: true,title:null,username:null,date:null
        };
      }
     
      componentDidMount() {
        
        AsyncStorage.getItem("title").then((value) => {
         this.setState({"title": value});
        }).done();
        AsyncStorage.getItem("username").then((value) => {
            this.setState({"username": value});
        }).done();
        AsyncStorage.getItem("date").then((value) => {
            this.setState({"date": value});
        }).done();
      }
      
      saveData(value) {
         
        AsyncStorage.setItem("title", value);
       this.setState({"title": value});
      
      }
      saveUser(value) {
        AsyncStorage.setItem("username", value);
        this.setState({"username": value});
        
      }
      saveDate(value) {
         
        AsyncStorage.setItem("date", value);
        this.setState({"date": value});
      }

      clearData(){
          AsyncStorage.clear();
          this.setState({"title": null});
          this.setState({"username": null});
          this.setState({"date": null});
      }
    static navigationOptions =({navigation})=> ({
        
          headerStyle: {display:"none"},
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
            fontSize: 18,
            zIndex: 1,
            lineHeight: 38
          },
         
      
    });

    render(){
       
        return(
            <ScrollView >
            
            <View style={styles.container}>  
            <TouchableHighlight onPress={()=>this.clearData()}  style={{alignItems:'center',justifyContent:'center',padding:10,backgroundColor:'#4f86f4',
                                 
                                 borderColor: '#fff',
                                 marginTop:50,
                                 marginLeft:10,
                                 width:80,
                                 alignSelf:"flex-start"
                                
                                }}>
                <Text style={{fontSize:12,color:'#fff'}}>NEW</Text>
            </TouchableHighlight>
            <Text style={styles.Heading}>Risk Assessment Matrix</Text>
            
           <TextInput placeholder="Title"  underlineColorAndroid='transparent'
            style={styles.txt} onChangeText={(text) => this.saveData(text)} value={this.state.title} ></TextInput> 
            <TextInput placeholder="User Name" underlineColorAndroid='transparent'
            style={styles.txt} onChangeText={(text) => this.saveUser(text)} value={this.state.username}></TextInput>
            
           <DatePicker 
           
            style={{width:200,backgroundColor:"#fff",marginTop:10}}
            date={this.state.date}
            showIcon={false}    
            placeholder="Select date"
            format="YYYY-MM-DD"
            minDate="2000-01-01"
            maxDate="2020-01-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"    
            onDateChange={(date) => this.saveDate(date)} 
        
         />
            
            <TouchableHighlight  onPress={()=>this.props.navigation.navigate('First')} style={{alignItems:'center',justifyContent:'center',padding:20,backgroundColor:'#4286f4',
                                 borderRadius: 40,
                                 borderWidth: 1,
                                 borderColor: '#fff',
                                 width:160,
                                margin:20,
                                marginTop:100
                            
                                }}>
                                
            <Text style={{fontSize:18,color:'#fff'}}>RAM 5x5</Text></TouchableHighlight>
            
            
            <TouchableHighlight  onPress={(isHidden) => this.setState({isHidden:false})}  style={{alignItems:'center',justifyContent:'center',padding:20,backgroundColor:'#4286f4',
                                 borderRadius: 40,
                                 borderWidth: 1,
                                 borderColor: '#fff',
                                 
                                 margin:20,
                                 marginBottom:31,
                                 width:160
                                
                                }}>
            <Text  style={{fontSize:18,color:'#fff'}}>Instructions</Text></TouchableHighlight>
            
            <MyView style={{position:"absolute",alignItems:'center'}} hide={this.state.isHidden}>
                <View  style={{height:500,width:300,backgroundColor:'green',position:'absolute',marginTop:80,zIndex:2,borderWidth: 3,
                                 borderColor: 'black'}}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',marginRight:10,alignSelf: 'center'}}>INSTRUCTIONS</Text>
            <TouchableHighlight underlayColor="#fff" style={styles.bbtn}>
            <Text   style={{color:'#fff',fontSize:20,fontWeight:'bold'}}
            
            
            onPress={() => {
                this.setState({ isHidden: true });
            }}
            >X</Text></TouchableHighlight>
            <View style={{flex:1,backgroundColor:'#fff',borderRadius: 0,
                                 borderTopWidth: 3,
                                 borderColor: 'black'}}><ScrollView>
                                 <Text style={{fontWeight:'400',fontStyle:'normal',fontSize:18}}>1.Click on the RAM 5x5 button to select RAM 5x5. {"\n"}
                                     2. Enter up to 5 hazards in the "Hazard #" boxes.{"\n"}
                                     3. Review, Severity and Likelihood/Probability descriptions.{"\n"}
                                     4. Select Severity and Probability ranking,The tool will
                                     automatically calculate "Risk Level".{"\n"}
                                     5. After that, click on Risk Reduction Hierarchy of Controls (HoC) button.{"\n"}
                                     6. Review the Hierarchy of Controls and Risk Reduction.{"\n"}
                                     7. Select the appropriate Severity Future State (FS) and Likelihood FS after the
                                      implementation of new controls.{"\n"}
                                     8. The application will automatically recalculate Risk Level Future State (FS) 
                                       after the controls implementation.{"\n"}
                                     9.Finally, click on RAM FS button.
                                        The tool automatically calculates 
                                        Risk Reduction and Residual Risk. </Text></ScrollView>
                            
            </View>

            </View></MyView>
            
            </View>
            </ScrollView>
           
            
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#327bf2',
        alignItems: 'center',       
    },
    Heading:{
        marginTop:60,
        marginBottom:20,
        fontSize:24,
        fontWeight:'600',
        fontStyle:'italic',
        color:'#fff'
    },
    txt:{
        height: 40,
        width:200,
        fontSize:18,
        textAlign:'center',
        margin:10,
        backgroundColor: '#fff'
        
      },
    button: {
      margin: 100,      
      alignItems: 'center',
      backgroundColor: 'red'
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
        
      },
      bbtn:{position:'absolute',right:0.1,alignItems:"center",alignSelf: 'flex-end',width:30}
    
  });