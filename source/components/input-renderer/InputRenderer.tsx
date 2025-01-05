import React from 'react';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../utils/Colors';
import { IInputRenderer } from '../../interfaces/IInputRenderer';
import { inputRendererStyles } from './InputRendererStyles';

const InputRenderer = ({label , keyboardType = 'default'}:IInputRenderer) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      outlineColor={Colors.alto}
      activeOutlineColor={Colors.alizarinCrimson}
      textColor={Colors.black}
      multiline={true}
      outlineStyle={inputRendererStyles.inputElement}
      contentStyle={inputRendererStyles.contentStyles}
      keyboardType={keyboardType}
    />
  );
};

export default InputRenderer;
