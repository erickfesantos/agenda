import React from 'react';
import {Image,TouchableHighlight,StatusBar,View, Text, Dimensions} from 'react-native';



export default function TelaInicial() {

  const statusBar = StatusBar.currentHeight;
  const tela90 = (0.9 * Dimensions.get('window').width);
  const tela40 = (0.4 * Dimensions.get('window').width);




    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <View style={{ backgroundColor:'#363946',flex: 1, alignItems: 'center'}}>
        
        <View style={{marginBottom: '2%',width: '100%',marginTop: statusBar-10, height:'12%', backgroundColor: '#424654', borderRadius:30, flexDirection: 'row', }}>
            <View style={{paddingHorizontal:'8%',width:'100%',flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{marginRight: '20%',width:170,color:'white', fontSize: 15, marginTop:'10%'}} >Configurações</Text>
            
                

                 
            
            </View>  
                   
        </View>
        
        
        <View style={{borderRadius:10,backgroundColor:'#424654', height:'75%', width:tela90}}>
          

          
            <TouchableHighlight >
              <View style={{paddingVertical:20,justifyContent:'flex-end', height:'100%', width:'100%'}}>

                  <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#424654',height:'60%',width:'100%'}}>

                  <Image 
                        source={require('../assets/servico.png')}
                        style={{marginHorizontal:20,width:'30%', height:'30%', resizeMode:"contain"}}
                      />
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:20,borderRadius:10,backgroundColor:'#485261', height:50, width:'100%'}}>
                  
                      <Image 
                        source={require('../assets/politica-de-privacidade.png')}
                        style={{marginHorizontal:20,width:30, height:30, resizeMode:"contain"}}
                      />
                    <Text style={{color:'#FFF'}} >Politica de privacidade</Text>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:20,borderRadius:10,backgroundColor:'#485261', height:50, width:'100%'}}>
                      <Image 
                        source={require('../assets/apoio-suporte.png')}
                        style={{marginHorizontal:20,width:30, height:30, resizeMode:"contain"}}
                      />
                    <Text style={{color:'#FFF'}} >Suporte e feedback</Text>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:20,borderRadius:10,backgroundColor:'#485261', height:50, width:'100%'}}>
                      <Image 
                        source={require('../assets/compartilhar.png')}
                        style={{marginHorizontal:20,width:30, height:30, resizeMode:"contain"}}
                      />
                    <Text style={{color:'#FFF'}} >Compartilhar app</Text>
                  </View>
              </View>
              
            </TouchableHighlight>

          


        </View>
        
        
        </View>
      </View>
    );
  }