import React, { useState } from 'react';
import { TouchableHighlight, View, Image } from 'react-native';
import Tela1 from './componentes/tela1';
import Tela2 from './componentes/tela2';
import Tela3 from './componentes/tela3';
import Tela4 from './componentes/tela4';





export default function App() {

  function desligarTela(){
    setTela1(false)
    setTela2(false)
    setTela3(false)
    setTela4(false)
      
  }

  const [tela1, setTela1] = useState(true);
  const [tela2, setTela2] = useState(false);
  const [tela3, setTela3] = useState(false);
  const [tela4, setTela4] = useState(false);
  let aux = 1;


  return (
    
    
    <View style={{ flex: 1, flexDirection: 'column-reverse',backgroundColor:'#363946' }}>
      <View style={{ margin:10,height:'6%', backgroundColor:'#363946'}}>
      <View style={{borderRadius:40, flexDirection: 'row',justifyContent: 'space-between',}}>

        <TouchableHighlight style={{borderTopLeftRadius: 30,borderBottomLeftRadius:30,width:'25%', height:'100%'}} underlayColor ="#525664" onPress={() => { desligarTela(), setTela1(true) }}>
          <View style={{borderTopLeftRadius: 30,borderBottomLeftRadius:30,width:'100%', height:'100%', backgroundColor:'#424654', 
                justifyContent: 'center', alignItems: 'center'}}>
            <Image 
              source={require('./assets/agenda.png')}
              style={{width:'50%', height:'50%', resizeMode:"contain"}}
            />
          </View>
        </TouchableHighlight> 

        <TouchableHighlight style={{width:'25%', height:'100%'}} underlayColor ="#555" onPress={() => { desligarTela(), setTela2(true) }}>
          <View style={{width:'100%', height:'100%', backgroundColor:'#424654', 
                justifyContent: 'center', alignItems: 'center'}}>
            <Image 
              source={require('./assets/clientes.png')}
              style={{width:'50%', height:'50%', resizeMode:"contain"}}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={{width:'25%', height:'100%'}} underlayColor ="#555" onPress={() => { desligarTela(), setTela3(true) }}>
          <View style={{width:'100%', height:'100%', backgroundColor:'#424654', 
                justifyContent: 'center', alignItems: 'center'}}>
            <Image 
              source={require('./assets/grafico.png')}
              style={{width:'50%', height:'50%', resizeMode:"contain"}}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={{borderTopRightRadius: 30,borderBottomRightRadius:30,width:'25%', height:'100%'}} underlayColor ="#525664" onPress={() => { desligarTela(), setTela4(true) }}>
          <View style={{borderTopRightRadius: 30,borderBottomRightRadius:30,width:'100%', height:'100%', backgroundColor:'#424654', 
                justifyContent: 'center', alignItems: 'center'}}>
            <Image 
              source={require('./assets/configuracoes.png')}
              style={{width:'50%', height:'50%', resizeMode:"contain"}}
            />
          </View>
        </TouchableHighlight>

      </View>
      </View>


      <View style={{ height:'94%' }}>
          {tela1 ? <Tela1/> : (null)}
          {tela2 ? <Tela2 /> : (null)}
          {tela3 ? <Tela3/> : (null)}
          {tela4 ? <Tela4/> : (null)}
          
      </View>
    </View>
    
  );
}
