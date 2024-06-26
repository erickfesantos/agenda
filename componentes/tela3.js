import React, {useState} from 'react';
import {TouchableHighlight,Image,StatusBar,View, Text, Dimensions, FlatList} from 'react-native';
import Globais from './Globais';

const dataCrua = new Date();
const dataTratada = dataCrua.toLocaleString();
const dataString = dataTratada.substring(0, 10);

export default function TelaInicial() {

  const statusBar = StatusBar.currentHeight;
  const tela90 = (0.9 * Dimensions.get('window').width);
  const tela40 = (0.4 * Dimensions.get('window').width);
  //const bancoBruto = Globais.banco2;
  const banco = Globais.banco3;
  let valor = 0;
  let corte = 0;
  let sobrancelha = 0;
  let barba =0;

  const somar = () => {

    valor = 0;
    corte = 0;
    sobrancelha = 0;
    barba =0;

    for(let i = 0; i < Globais.banco2.length ; i++){
  //const [filtraMes, setFiltraMes] = useState(dataString.slice(3,5));
      if(Globais.banco2[i].data.slice(3,5) == dataString.slice(3,5)){
          if(Globais.banco2[i].servico == 'Corte' ){
            valor += 15;corte += 1
          }
          if(Globais.banco2[i].servico == "Corte\nBarba"){
            valor += 25;corte += 1;barba += 1;
          }
          if(Globais.banco2[i].servico == "Corte\nSobrancelha"){
            valor += 20;corte += 1;sobrancelha += 1;
          }
          if(Globais.banco2[i].servico == "Corte\nBarba\nSobrancelha"){
            valor += 30;corte += 1;sobrancelha += 1;barba += 1;
          }
      }
    }
  }




    return (

      
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {somar()}
        
        <View style={{ backgroundColor:'#363946',flex: 1, alignItems: 'center'}}>
        
        <View style={{marginBottom: '2%',width: '100%',marginTop: statusBar-10, height:'12%', backgroundColor: '#424654', borderRadius:30, flexDirection: 'row', }}>
            <View style={{paddingHorizontal:'8%',width:'100%',flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{marginRight: '20%',width:170,color:'white', fontSize: 15, marginTop:'10%'}} >Gerenciamento</Text>
            
              

                 
            
            </View>  
                   
        </View>


        <View style={{height:'85%', width:tela90}}>
          <View style={{height:'35%', width:tela90, marginBottom:20}} >
            <View style={{borderTopLeftRadius:15, borderTopRightRadius:15,height:'33%', width:tela90, backgroundColor:'#485261',flexDirection:'row',alignItems:'center' ,justifyContent:'space-around'}} >
              <Text style={{color:'#FFF'}}>Agendamentos:</Text><Text style={{color:'#FFF'}} >{Globais.banco2.length}</Text>
            </View>
            <View style={{height:'33%', width:tela90, backgroundColor:'#424654',flexDirection:'row',alignItems:'center' ,justifyContent:'space-around'}} >
            <Text style={{color:'#FFF'}} >Total bruto:</Text><Text style={{color:'#FFF'}} >{valor} $</Text>
            </View>
            <View style={{borderBottomLeftRadius:15,borderBottomRightRadius:15,height:'33%', width:tela90, backgroundColor:'#485261',flexDirection:'row',alignItems:'center' ,justifyContent:'space-around'}} >
            <Text style={{color:'#FFF'}} >Cortes: {corte}</Text><Text style={{color:'#FFF'}} >Sobrancelhas: {sobrancelha}</Text><Text style={{color:'#FFF'}} >Barbas: {barba}</Text>
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