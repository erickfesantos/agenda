import React, { useState } from 'react';
import {TextInput,Modal,RefreshControl,Dimensions,FlatList,Image,StatusBar,TouchableHighlight ,View, Text} from 'react-native';
import Globais from './Globais';




export default function TelaInicial() {

  const statusBar = StatusBar.currentHeight;
  const tela90 = (0.9 * Dimensions.get('window').width);
  const tela40 = (0.4 * Dimensions.get('window').width);
  

  const banco1 = Globais.banco;

  const [refreshing, setRefreshing] = useState(false);
  const [modal, setModal] = useState(false);
  const [addCliente, setAddCliente] = useState('');
  const [addContato, setAddContato] = useState('');

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simule a busca de dados aqui
    setTimeout(() => {
      // Atualize os dados após a simulação
      
      setRefreshing(false);
    }, 100);
  }, []);
  

  const addNovoCliente = (nome, contato) => {
    Globais.banco.push({id:banco1.length,nome:nome,contato:contato});
    
  }

  const removeCliente = (idToRemove) => {
    
    const indice = banco1.findIndex(item => item.id === idToRemove);
    if(idToRemove+1 == banco1.length || idToRemove==1 && banco1.length==1){
      idToRemove = -1
    }
    banco1.splice(indice,1);
    attIndiceBanco();
    
    onRefresh();
  };

  const attIndiceBanco = () => {
    for( let i = 0; i< banco1.length ; i++){
      banco1[i].id = i; 
    }
  }


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <View style={{ backgroundColor:'#363946',flex: 1, alignItems: 'center'}}>
        
          <View style={{marginBottom: '2%',width: '100%',marginTop: statusBar-10, height:'12%', backgroundColor: '#424654', borderRadius:30, flexDirection: 'row', }}>
              <View style={{paddingHorizontal:'8%',width:'100%',flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{marginRight: '20%',width:170,color:'white', fontSize: 15, marginTop:'10%'}} >Clientes</Text>
              
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




        




          <View style={{ marginTop:'2%',alignItems: 'center',backgroundColor:'#363946', height:'75%',width:'100%'}}>
            <FlatList
                data={banco1}
                keyExtractor={item=>item.id}
                contentContainerStyle={{backgroundColor:'#363946', }}       
                renderItem={({item})=>
                    
                    <View style={{backgroundColor:'#485261',borderRadius:10,marginBottom:13,height:50,width: tela90,flexDirection:'row', alignItems:'center',justifyContent:'space-evenly'}}>     
                        
                        <Text style={{color:'#FFF'}}>{item.nome}</Text>
                        <Text style={{color:'#FFF'}}>{item.contato}</Text>
                        
                        <TouchableHighlight onPress={()=>{removeCliente(item.id)}} style={{justifyContent:'center', alignItems:'center',backgroundColor:'#333',height:40,width:40,borderRadius:10}}>
                        <Image 
                            source={require('../assets/lata-de-lixo.png')}
                            style={{width:'70%', height:'70%', resizeMode:"contain"}}
                          />
                        </TouchableHighlight>
                    </View>
                    }
               
            />
        </View>





            <Modal
              animationType="slide"
              transparent={true}
              visible={modal}
              style={{}}>
              <View style={{justifyContent:'center', alignItems:'center' ,height:'100%',width:'100%'}}>
                <View style={{borderRadius:20,backgroundColor:'#485261', height:'98%',width:'98%'}}>

                  <View style={{marginBottom: '2%',width: '100%',marginTop: '-7%', height:'12%', backgroundColor: '#424654', borderRadius:0, flexDirection: 'row', }}>
                    <View style={{width:'100%',flexDirection:'row',  alignItems: 'center'}}>
                      
                      <TouchableHighlight style={{width:50,height:50,borderRadius:10,marginTop:'10%'}} underlayColor ="#424654" onPress={() => {setModal(!modal)}}>
                        <View style={{marginTop:'-20%',width:50,height:50,justifyContent: 'center', alignItems: 'center'}}>
                          <Image 
                            source={require('../assets/volte.png')}
                            style={{width:'80%', height:'80%', resizeMode:"contain"}}
                          />
                        </View> 
                      </TouchableHighlight>
                      
                      
                      <Text style={{width:180,color:'white', fontSize: 20, marginTop:'8%',paddingLeft:10}} >Adicione clientes</Text>
            
                      
            
                    </View>
                  </View>


                  <View style={{padding:'2%',width:'100%', height:'100%'}}>

                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <View>  
                        <Text style={{marginBottom:10,fontSize: 20,color:'#FFF'}} >Nome do cliente:</Text>
                        <TextInput
                          placeholder="Nome do cliente..."
                          placeholderTextColor="#555"
                          value={addCliente}
                          onChangeText={ex=>setAddCliente(ex)}
                        
                          style={{width:tela40,color: '#FFF',paddingHorizontal:10,borderRadius:10,height:50,backgroundColor:'#333'}}
                        />
                      </View> 
                      <View>  
                        <Text style={{marginBottom:10,fontSize: 20,color:'#FFF'}} >Contato do cliente</Text>
                        <TextInput
                          placeholder="(00) 0 0000 0000..."
                          placeholderTextColor="#555"
                          value={addContato}
                          onChangeText={ex=>setAddContato(ex)}
                        
                          style={{width:tela40,color: '#FFF',paddingHorizontal:10,borderRadius:10,height:50,backgroundColor:'#333'}}
                        />
                      </View>
                    </View>


                    <TouchableHighlight style={{borderRadius: 10,marginTop:60 ,height:100}} onPress={()=>{addNovoCliente(addCliente, addContato),setModal(!modal), setAddCliente(''), setAddContato('')}}>
                      <View style={{borderRadius: 10,height:'100%', width:'100%' ,backgroundColor: '#363946',justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color: '#FFF',fontSize: 20,}} >Salvar</Text>
                      </View>
                    </TouchableHighlight>




                  </View>
                
              </View>
              </View>
                
            </Modal>          





        </View>
      </View>
    );
  }