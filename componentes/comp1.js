import React from 'react';
import {Text} from 'react-native';
import Estilos from '../estilos/Estilos'

export default function App(props) {
  return (
        <Text style = {Estilos.fx2}>Caixa {props.nome}</Text>
  );
};

