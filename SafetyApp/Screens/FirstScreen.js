import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableHighlight,TextInput,ScrollView,Button} from 'react-native'

export default class SecondScreeen extends React.Component{
    static navigationOptions =({navigation})=> ({
        title:'Semi-Quantitative Risk(5x5) Matrix Example - Current State',
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
        this.state = {text1:'-',text2:'-',Sol:'',
            H2text1:'-',H2text2:'-',H2Sol:'',
            H3text1:'-',H3text2:'-',H3Sol:'',
            H4text1:'-',H4text2:'-',H4Sol:'',
            H5text1:'-',H4text2:'-',H5Sol:''
        };
        this.state = {backgroundColor:'#fff',H2backgroundColor:'#fff',H3backgroundColor:'#fff',
                    H4backgroundColor:'#fff',H5backgroundColor:'#fff'
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
        
    render(){
        const t=this.state.H2Sol;
        
        return(
            
            
            <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{alignItems:'center',backgroundColor:'#fff'}} >
                
                <Text style={{marginTop:30}}>
                    HAZARD 1
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:20}}>SEVERITY   : </Text>
                    <Text style={{margin:20}}>Likelyhood : </Text>
                    <Text style={{margin:20}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput keyboardType='numeric'  underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(text1) => this.setState({text1:text1,text2:this.state.text2,Sol:this.Calculate(text1,this.state.text2),backgroundColor:this.random(this.Calculate(text1,this.state.text2))})}
                    />
                    <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(text2) => this.setState({text2:text2,text1:this.state.text1,Sol:this.Calculate(text2,this.state.text1),backgroundColor:this.random(this.Calculate(this.state.text1,text2))})}
                    />
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.backgroundColor}]} 
                    value={`${this.Calculate(this.state.text1,this.state.text2)}`}
                    />                   
                    
                    </View>                   
                </View>   
                <Text>
                    HAZARD 2
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:20}}>SEVERITY   : </Text>
                    <Text style={{margin:20}}>Likelyhood : </Text>
                    <Text style={{margin:20}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H2text1) => this.setState({H2text1:H2text1,H2text2:this.state.H2text2,H2Sol:this.Calculate(H2text1,this.state.H2text2),H2backgroundColor:this.random(this.Calculate(H2text1,this.state.H2text2))})}
                    />
                    <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H2text2) => this.setState({H2text2:H2text2,H2text1:this.state.H2text1,H2Sol:this.Calculate(H2text2,this.state.H2text1),H2backgroundColor:this.random(this.Calculate(this.state.H2text1,H2text2))})}
                    />
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H2backgroundColor}]} 
                    value={`${this.Calculate(this.state.H2text1,this.state.H2text2)}`}
                    />                   
                    </View>                   
                </View>     
                <Text>
                    HAZARD 3
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:20}}>SEVERITY   : </Text>
                    <Text style={{margin:20}}>Likelyhood : </Text>
                    <Text style={{margin:20}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H3text1) => this.setState({H3text1:H3text1,H3text2:this.state.H3text2,H2Sol:this.Calculate(H3text1,this.state.H3text2),H3backgroundColor:this.random(this.Calculate(H3text1,this.state.H3text2))})}
                    />
                    <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H3text2) => this.setState({H3text2:H3text2,H3text1:this.state.H3text1,H3Sol:this.Calculate(H3text2,this.state.H3text1),H3backgroundColor:this.random(this.Calculate(this.state.H3text1,H3text2))})}
                    />
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H3backgroundColor}]} 
                    value={`${this.Calculate(this.state.H3text1,this.state.H3text2)}`}
                    />                   
                    </View>                   
                </View>                     
                <Text>
                    HAZARD 4
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:20}}>SEVERITY   : </Text>
                    <Text style={{margin:20}}>Likelyhood : </Text>
                    <Text style={{margin:20}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H4text1) => this.setState({H4text1:H4text1,H4text2:this.state.H4text2,H4Sol:this.Calculate(H4text1,this.state.H4text2),H4backgroundColor:this.random(this.Calculate(H4text1,this.state.H4text2))})}
                    />
                    <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H4text2) => this.setState({H4text2:H4text2,H4text1:this.state.H4text1,H4Sol:this.Calculate(H4text2,this.state.H4text1),H4backgroundColor:this.random(this.Calculate(this.state.H4text1,H4text2))})}
                    />
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H4backgroundColor}]} 
                    value={`${this.Calculate(this.state.H4text1,this.state.H4text2)}`}
                    />                   
                    </View>                   
                </View>                     
                <Text>
                    HAZARD 5
                </Text>
                <View style={{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{margin:20}}>SEVERITY   : </Text>
                    <Text style={{margin:20}}>Likelyhood : </Text>
                    <Text style={{margin:20}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H5text1) => this.setState({H5text1:H5text1,H5text2:this.state.H5text2,H5Sol:this.Calculate(H5text1,this.state.H5text2),H5backgroundColor:this.random(this.Calculate(H5text1,this.state.H5text2))})}
                    />
                    <TextInput keyboardType='numeric' underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(H5text2) => this.setState({H5text2:H5text2,H5text1:this.state.H5text1,H5Sol:this.Calculate(H5text2,this.state.H5text1),H5backgroundColor:this.random(this.Calculate(this.state.H5text1,H5text2))})}
                    />
                    <TextInput editable={false}  underlineColorAndroid='transparent' style={[styles.txtinput, {backgroundColor: this.state.H5backgroundColor}]} 
                    value={`${this.Calculate(this.state.H5text1,this.state.H5text2)}`}
                    />                   
                    </View>                   
                </View>   
                <Text>{this.state.H2Sol}</Text>
                <Text>{this.state.H3Sol}</Text>                                  
                   
                <Button
                 title="Risk Reduction HOC 5x5"
                 onPress={()=>this.props.navigation.navigate('Second',{a:this.state.Sol,b1:t,c:this.state.H3Sol,d:this.state.H4Sol,e:this.state.H5Sol,a1:this.state.backgroundColor,a2:this.state.H2backgroundColor,a3:this.state.H3backgroundColor,a4:this.state.H4backgroundColor,a5:this.state.H5backgroundColor})}
                 />
                
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
        height: 40,
        textAlign:'center',
        width:80, 
        margin:10,
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