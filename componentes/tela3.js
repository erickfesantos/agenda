import React from 'react';
import {TouchableHighlight,Image,StatusBar,View, Text, Dimensions, FlatList} from 'react-native';
import Globais from './Globais';



export default function TelaInicial() {

  const statusBar = StatusBar.currentHeight;
  const tela90 = (0.9 * Dimensions.get('window').width);
  const tela40 = (0.4 * Dimensions.get('window').width);
  //const bancoBruto = Globais.banco2;
  const banco = Globais.banco3;

  




    return (

      
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <View style={{ backgroundColor:'#363946',flex: 1, alignItems: 'center'}}>
        
        <View style={{marginBottom: '2%',width: '100%',marginTop: statusBar-10, height:'12%', backgroundColor: '#424654', borderRadius:30, flexDirection: 'row', }}>
            <View style={{paddingHorizontal:'8%',width:'100%',flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{marginRight: '20%',width:170,color:'white', fontSize: 15, marginTop:'10%'}} >Gerenciamento</Text>
            
              

                 
            
            </View>  
                   
        </View>


        <View style={{height:'85%', width:tela90}}>
          <View style={{height:'35%', width:tela90, marginBottom:20}} >
            <View style={{borderTopLeftRadius:15, borderTopRightRadius:15,height:'33%', width:tela90, backgroundColor:'#485261',flexDirection:'row',alignItems:'center' ,justifyContent:'space-around'}} >
              <Text style={{color:'#FFF'}}>Serviços:</Text><Text style={{color:'#FFF'}} >40</Text>
            </View>
            <View style={{height:'33%', width:tela90, backgroundColor:'#424654',flexDirection:'row',alignItems:'center' ,justifyContent:'space-around'}} >
            <Text style={{color:'#FFF'}} >Total bruto:</Text><Text style={{color:'#FFF'}} >800$</Text>
            </View>
            <View style={{borderBottomLeftRadius:15,borderBottomRightRadius:15,height:'33%', width:tela90, backgroundColor:'#485261',flexDirection:'row',alignItems:'center' ,justifyContent:'space-around'}} >
            <Text style={{color:'#FFF'}} >Cortes: 38</Text><Text style={{color:'#FFF'}} >Sobrancelhas: 7</Text><Text style={{color:'#FFF'}} >Barbas: 5</Text>
            </View>
          </View>
          <View style={{ height:'60%',width:tela90}}>
            
            <FlatList
                data={banco}
                keyExtractor={item=>item.id}
                contentContainerStyle={{backgroundColor:'#424654', }}       
                renderItem={({item})=>
                    
                    <View style={{backgroundColor:'#485261',borderRadius:10,marginBottom:13,height:70,width: tela90,flexDirection:'row', alignItems:'center',justifyContent:'space-evenly'}}>     
                        
                        <Text style={{color:'#FFF'}}>{item.nome}</Text>
                        
                        <Text style={{color:'#FFF'}}>Último corte: {31-item.data.slice(0,2)} dias atrás</Text>
                        
                        
                    </View>
                    }
               
            />
        </View>

        </View>
                  

        </View>
      </View>
    );
  }