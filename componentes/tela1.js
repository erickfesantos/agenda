import React, { useState } from 'react';
import {Switch,TextInput,Modal,TouchableHighlight, View, Text, StatusBar,Image,FlatList,Dimensions} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Globais from './Globais';


const tela90 = (0.9 * Dimensions.get('window').width);
const tela40 = (0.4 * Dimensions.get('window').width);
const statusBar = StatusBar.currentHeight;
const dataCrua = new Date();
const dataTratada = dataCrua.toLocaleString();
const dataString = dataTratada.substring(0, 10);
const horaString = dataTratada.slice(11,17);


export default function TelaInicial() {

  
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [data, setData] = useState(dataString);
  const [hora, setHora] = useState(horaString);
  const [servicos, setServicos] = useState('Corte');
  const [clienteSelecionado, setClienteSelecionado] = useState('...');
  const [marca, setMarca] = useState(false);
  const corDaView = marca === false? '#485261' : '#d36400';
  const [refreshing, setRefreshing] = useState(false);

  

  const toggleSwitch = () => setMarca(previousState =>!previousState);
  
  

  const [agendamentos, setAgendamentos] = useState(Globais.banco2);
  

  const cliente = Globais.banco;

  // -------------------- Função para tela 03, banco de dados. --------------------------------------------------	
  const bancoBruto = Globais.banco2;
  const banco = Globais.banco3;

  const filtraMesAtual = ()=>{
    Globais.banco3 = [];

    for( let i = 0; i< bancoBruto.length ; i++){
      bancoBruto[i].data.slice(3,5)=='05'? Globais.banco3.push({id:banco.length,nome:bancoBruto[i].nome, data:bancoBruto[i].data}) : (null);
    }

    for( let i = 0; i< Globais.banco3.length ; i++){
      Globais.banco3[i].id = i; 
    }
  }
  // --------------------------------------------^^^^^^^^-------------------------------------------------------
  

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      // Simule a busca de dados aqui
      setTimeout(() => {
        // Atualize os dados após a simulação
        
        setRefreshing(false);
      }, 100);
    }, []);

    const addAgendamentos = (nome, servico, data, hora, cor) => {
      Globais.banco2.push({id:Globais.banco2.length,nome:nome,servico:servico,data:data, hora:hora, cor:cor});
    };

    const removeAgendamentos = (idToRemove) => {
    
      const indice = Globais.banco2.findIndex(item => item.id === idToRemove);
      if(idToRemove+1 == Globais.banco2.length || idToRemove==1 && Globais.banco2.length==1){
        idToRemove = -1
      }
      Globais.banco2.splice(indice,1);
      attIndiceBanco();
      
      onRefresh();
    };
  
    const attIndiceBanco = () => {
      for( let i = 0; i< Globais.banco2.length ; i++){
        Globais.banco2[i].id = i; 
      }
    }
    
    const renderClientes = () => {
      return cliente.map((prod) => {
        return <Picker.Item label={prod.nome} value={prod.nome} />;
      });
    };


    return (

      

      <View style={{ backgroundColor:'#363946',flex: 1, alignItems: 'center'}}>
        
        <View style={{marginBottom: '2%',width: '100%',marginTop: statusBar-10, height:'12%', backgroundColor: '#424654', borderRadius:30, flexDirection: 'row', }}>
            <View style={{paddingHorizontal:'8%',width:'100%',flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{marginRight: '20%',width:170,color:'white', fontSize: 15, marginTop:'10%'}} >Agenda - {dataString}.</Text>
            
                <TouchableHighlight style={{marginTop:'10%',borderRadius:10}} underlayColor ="#555" onPress={() => {setModalVisible(!modalVisible)}}>
                  <View style={{width:50,height:50,justifyContent: 'center', alignItems: 'center'}}>
                    <Image 
                      source={require('../assets/adicionar-botao.png')}
                      style={{width:'80%', height:'80%', resizeMode:"contain"}}
                    />
                  </View> 
                </TouchableHighlight>

                 
            
            </View>  
                   
        </View>

        
        

        <View style={{ marginTop:'2%',alignItems: 'center',backgroundColor:'#363946', height:'85%',width:'100%'}}>
            {filtraMesAtual()}
            <FlatList
                data={agendamentos}
                keyExtractor={item=>item.id}
                contentContainerStyle={{backgroundColor:'#363946', }}       
                renderItem={({item})=>
                    
                    <View style={{backgroundColor:item.cor,borderRadius:10,marginBottom:13,height:70,width: tela90,flexDirection:'row', alignItems:'center',justifyContent:'space-evenly'}}>     
                        
                        <Text style={{color:'#FFF'}}>{item.nome}</Text>
                        <Text style={{color:'#FFF'}}>{item.servico}</Text>
                        <Text style={{color:'#FFF'}}>{item.data}</Text>
                        <Text style={{color:'#FFF'}}>{item.hora}</Text>
                        <TouchableHighlight onPress={()=>removeAgendamentos(item.id)} style={{justifyContent:'center', alignItems:'center',backgroundColor:'#333',height:40,width:40,borderRadius:10}}>
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
            visible={modalVisible}
              style={{}}>
                <View style={{justifyContent:'center', alignItems:'center' ,height:'100%',width:'100%'}}>
                  <View style={{borderRadius:20,backgroundColor:'#485261', height:'98%',width:'98%'}}>

                  <View style={{marginBottom: '2%',width: '100%',marginTop: '-7%', height:'12%', backgroundColor: '#424654', borderRadius:0, flexDirection: 'row', }}>
                    <View style={{width:'100%',flexDirection:'row',  alignItems: 'center'}}>
                      
                      <TouchableHighlight style={{width:50,height:50,borderRadius:10,marginTop:'10%'}} underlayColor ="#424654" onPress={() => {setModalVisible(!modalVisible)  }}>
                        <View style={{marginTop:'-20%',width:50,height:50,justifyContent: 'center', alignItems: 'center'}}>
                          <Image 
                            source={require('../assets/volte.png')}
                            style={{width:'80%', height:'80%', resizeMode:"contain"}}
                          />
                        </View> 
                      </TouchableHighlight>
                      
                      
                      <Text style={{width:170,color:'white', fontSize: 20, marginTop:'8%',paddingLeft:10}} >Agendamento</Text>
            
                      
            
                    </View>
                  </View>
                          <View style={{paddingHorizontal:'5%', paddingTop:'5%'}}>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                              <View>
                                <Text style={{marginBottom:10,fontSize: 20,color:'#FFF'}}>Nome do cliente:</Text>
                                <TextInput
                                  placeholder="Nome do cliente..."
                                  placeholderTextColor="#555"
                                  value={text}
                                  onChangeText={ex=>setText(ex)}
                                
                                  style={{width:tela40,color: '#FFF',paddingHorizontal:10,borderRadius:10,height:50,backgroundColor:'#333'}}
                                />
                              </View>
                              <View>
                                <Text style={{marginBottom:10,fontSize: 20,color:'#FFF'}}>Banco de clientes:</Text>
                                <Picker
                                  style={{width: tela40,color: '#FFF',paddingHorizontal:10,height:50,backgroundColor:'#333'}}
                                  selectedValue={clienteSelecionado}
                                  onValueChange={(itemValue) =>
                                    setClienteSelecionado(itemValue)
                                  }>
                                  {renderClientes()}
                                </Picker>
                              </View>
                            </View>



                            <Text style={{marginTop:30,marginBottom:10,fontSize: 20,color:'#FFF'}}>Serviço:</Text>
                            <Picker
                              style={{color: '#FFF',paddingHorizontal:10,height:50,backgroundColor:'#333'}}
                              selectedValue={servicos}
                              onValueChange={(itemValue) =>
                                setServicos(itemValue)
                              }>
                              <Picker.Item label="Corte" value="Corte" />
                              <Picker.Item label="Corte - Barba" value={"Corte\nBarba"} />
                              <Picker.Item label="Corte - Barba - Sobrancelha" value={"Corte\nBarba\nSobrancelha"} />
                            </Picker>

                              <View style={{marginTop:30,flexDirection:'row', justifyContent: 'space-between'}}>
                                <View>
                                  <Text style={{marginBottom:10,fontSize: 20,color:'#FFF'}}>Data:</Text>
                                  <TextInput
                                    placeholder = {dataString}
                                    placeholderTextColor="#555"
                                    value={data}
                                    onChangeText={ex=>setData(ex)}
                                  
                                    style={{width:tela40,color: '#FFF',paddingHorizontal:10,borderRadius:10,height:50,backgroundColor:'#333'}}
                                  />
                                </View>
                                <View>
                                  <Text style={{marginBottom:10,fontSize: 20,color:'#FFF'}}>Hora:</Text>
                                  <TextInput
                                    placeholder={horaString}
                                    placeholderTextColor="#555"
                                    value={hora}
                                    onChangeText={ex=>setHora(ex)}
                                  
                                    style={{width:tela40, color: '#FFF',paddingHorizontal:10,borderRadius:10,height:50,backgroundColor:'#333'}}
                                  />
                                </View>
                              </View>

                              <View style={{borderRadius:10,backgroundColor:'#363946',height:50,width:'100%',marginTop:40,alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{paddingLeft:10,color:'#FFF',fontSize:20}}>Tornar caso especial: </Text>
                                <Switch
                                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                                  thumbColor={marca ? "#f5dd4b" : "#f4f3f4"}
                                  
                                  onValueChange={toggleSwitch}
                                  value={marca}
                                />
    
                                
                              </View>

                            <TouchableHighlight style={{borderRadius: 10,marginTop:60 ,height:100}} onPress={()=>{addAgendamentos([text === '' ? clienteSelecionado:text], servicos, data, hora, corDaView),setModalVisible(!modalVisible), setText(''), setClienteSelecionado('...'), setMarca(false)}}>
                              <View style={{borderRadius: 10,height:'100%', width:'100%' ,backgroundColor: '#363946',justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color: '#FFF',fontSize: 20,}} >Salvar</Text>
                              </View>
                            </TouchableHighlight>


                          </View>   

                          

                  </View>
                </View>
                
                
        </Modal>

        
      </View>
    );
  }