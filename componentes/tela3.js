import React, {useState} from 'react';
import {TouchableHighlight,Image,StatusBar,View, Text, Dimensions, FlatList, Modal} from 'react-native';
import Globais from './Globais';

const dataCrua = new Date();
const dataTratada = dataCrua.toLocaleString();
const dataString = dataTratada.substring(0, 10);

export default function TelaInicial() {

  const statusBar = StatusBar.currentHeight;
  const tela90 = (0.9 * Dimensions.get('window').width);
  const tela40 = (0.4 * Dimensions.get('window').width);
  const [modal, setModal] = useState(false);
  
  const banco = Globais.banco3;
  let valor = 0;
  let corte = 0;
  let sobrancelha = 0;
  let barba =0;
  let mes =1;

  let valores = [0,0,0,0,0,0,0,0,0,0,0,0];
  let cortes = [0,0,0,0,0,0,0,0,0,0,0,0];
  let sobrancelhas = [0,0,0,0,0,0,0,0,0,0,0,0];
  let barbas = [0,0,0,0,0,0,0,0,0,0,0,0];

  const somar = () => {

    valor = 0;
    corte = 0;
    sobrancelha = 0;
    barba = 0;
    
    

    for(let i = 0; i < Globais.banco2.length ; i++){
  
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

  const todosMeses = () => {

  valores = [0,0,0,0,0,0,0,0,0,0,0,0];
  cortes = [0,0,0,0,0,0,0,0,0,0,0,0];
  sobrancelhas = [0,0,0,0,0,0,0,0,0,0,0,0];
  barbas = [0,0,0,0,0,0,0,0,0,0,0,0];

    for(let j=1 ; j<=12 ; j++){
    for(let i = 0; i < Globais.banco2.length ; i++){
      if(Globais.banco2[i].data.slice(3,5) == j && Globais.banco2[i].servico == 'Corte' ){
        
        valores[j-1] += 15; cortes[j-1] += 1
      }
      if(Globais.banco2[i].data.slice(3,5) == j && Globais.banco2[i].servico == "Corte\nBarba" ){
        valores[j-1] += 15; cortes[j-1] += 1
      }
      if(Globais.banco2[i].data.slice(3,5) == j && Globais.banco2[i].servico == "Corte\nSobrancelha" ){
        valores[j-1] += 15; cortes[j-1] += 1
      }
      if(Globais.banco2[i].data.slice(3,5) == j && Globais.banco2[i].servico == "Corte\nBarba\nSobrancelha" ){
        valores[j-1] += 15; cortes[j-1] += 1
      }
    }
    }

    
  }


    return (

      
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {somar()}
        {todosMeses()}
        
        <View style={{ backgroundColor:'#363946',flex: 1, alignItems: 'center'}}>
        
        <View style={{marginBottom: '2%',width: '100%',marginTop: statusBar-10, height:'12%', backgroundColor: '#424654', borderRadius:30, flexDirection: 'row', }}>
            <View style={{paddingHorizontal:'8%',width:'100%',flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{marginRight: '20%',width:170,color:'white', fontSize: 15, marginTop:'10%'}} >Gerenciamento</Text>
            

                <TouchableHighlight style={{marginTop:'10%',borderRadius:10}} underlayColor ="#555" onPress={() => {setModal(!modal)}}>
                    <View style={{width:50,height:50,justifyContent: 'center', alignItems: 'center'}}>
                      <Image 
                        source={require('../assets/adicionar-botao.png')}
                        style={{width:'80%', height:'80%', resizeMode:"contain"}}
                      />
                    </View> 
                  </TouchableHighlight>
                 
            
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

        <Modal
              animationType="slide"
              transparent={true}
              visible={modal}
              >
              <View style={{justifyContent:'center', alignItems:'center',width:"100%", height:'100%'}}>
                <View  style={{backgroundColor:'#FFF',width:"95%", height:'95%'}}>
                
                  <TouchableHighlight onPress={()=>{setModal(false)}} style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#333',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Voltar</Text>
                  </TouchableHighlight>

                  <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Janeiro: (Cortes = {cortes[0]} - Sobrancelhas = {sobrancelhas[0]} - Barbas = {barbas[0]} - Total = {valores[0]}$)</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Fevereiro: (Cortes = {cortes[1]} - Sobrancelhas = {sobrancelhas[1]} - Barbas = {barbas[1]} - Total = {valores[1]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Marco: (Cortes = {cortes[2]} - Sobrancelhas = {sobrancelhas[2]} - Barbas = {barbas[2]} - Total = {valores[2]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Abril: (Cortes = {cortes[3]} - Sobrancelhas = {sobrancelhas[3]} - Barbas = {barbas[3]} - Total = {valores[3]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Maio: (Cortes = {cortes[4]} - Sobrancelhas = {sobrancelhas[4]} - Barbas = {barbas[4]} - Total = {valores[4]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Junho: (Cortes = {cortes[5]} - Sobrancelhas = {sobrancelhas[5]} - Barbas = {barbas[5]} - Total = {valores[5]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Julho: (Cortes = {cortes[6]} - Sobrancelhas = {sobrancelhas[6]} - Barbas = {barbas[6]} - Total = {valores[6]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Agosto: (Cortes = {cortes[7]} - Sobrancelhas = {sobrancelhas[7]} - Barbas = {barbas[7]} - Total = {valores[7]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Setembro: (Cortes = {cortes[8]} - Sobrancelhas = {sobrancelhas[8]} - Barbas = {barbas[8]} - Total = {valores[8]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Outubro: (Cortes = {cortes[9]} - Sobrancelhas = {sobrancelhas[9]} - Barbas = {barbas[9]} - Total = {valores[9]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Novembro: (Cortes = {cortes[10]} - Sobrancelhas = {sobrancelhas[10]} - Barbas = {barbas[10]} - Total = {valores[10]}$):</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',margin:1,backgroundColor:'#444',width:"99%", height:'7.45%'}}>
                    <Text style={{color:'white'}}>Dezembro: (Cortes = {cortes[11]} - Sobrancelhas = {sobrancelhas[11]} - Barbas = {barbas[11]} - Total = {valores[11]}$):</Text></View>
                </View>
              </View>

        </Modal>

      </View>
    );
  }