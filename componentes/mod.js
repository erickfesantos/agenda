import React, { useState } from 'react';
import { Modal, View, Text, Button } from "react-native";
import Estilos from '../estilos/Estilos';


export default function(){

    const [visivel, setVisivel] = useState(true);


    return(
        <View  >
            <Modal 
                animationType='fade'
                transparent={true}
                visible={visivel}
            >
                
                <View style={Estilos.moda} >
                    <Text>Teste de Modal</Text>
                    <Text>Teste de Modal</Text>
                    <Button
                        title='Descer'
                        onPress={()=>setVisivel(!visivel)}
      
                    />


                </View>

            </Modal>
            <Button
                title='Subir'
                onPress={()=>setVisivel(!visivel)}
            />
        </View>
    )
}
