import React,{Component} from 'react';
import {Text,View,StyleSheet,TextInput,ScrollView,Button} from 'react-native'

export default class SecondScreeen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {text1: '-',text2:'-',Sol:''};
      }
    Calculate(text1,text2)
        {   
            if(text1=='-' || text2=='-'){
                return '';
            }
            else if(text1==''||text2=='')
            {
                return ''
            }
            else{
                
                return text1 * text2
            }
        }
        
    render(){
        
        return(
            <View style={styles.container}>
                <View style={{flex:0.4,flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                <Text>
                    HAZARD 1
                </Text>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Text style={{padding:10}}>SEVERITY   : </Text>
                    <Text style={{padding:10}}>Likelyhood : </Text>
                    <Text style={{padding:10}}>Risk Level   : </Text>
                    </View>
                    <View style={{flex:0.3,flexDirection:"column",justifyContent:"space-evenly"}}>
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(text1) => this.setState({text1:text1,text2:this.state.text2,Sol:this.Calculate(text1,this.state.text2)})}
                    />
                    <TextInput underlineColorAndroid='transparent' style={styles.txtinput} 
                    onChangeText={(text2) => this.setState({text2:text2,text1:this.state.text1,Sol:this.Calculate(text2,this.state.text1)})}
                    />
                    <TextInput editable={false} underlineColorAndroid='transparent' style={styles.txtinput} 
                    value={`${this.state.Sol}`}
                    />
                    </View>
                </View>               
                <Button
                 title="Risk Reduction HOC 5x5"
                 onPress={()=>this.props.navigation.navigate('Second')}
                 />
                </View>
                
            </View>
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
    txtinput:{
        height: 40,
        textAlign:'center',
        width:80, 
        borderRadius: 4,
        borderWidth: 1,
         borderColor: '#d6d7da'
    }
  });