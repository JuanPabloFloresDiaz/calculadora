import {TextInput } from 'react-native';

export default function Campo({textoPlaceholder, texto, funcion,tipo, estilo, placeholder }) {
    return (
        <TextInput
            placeholderTextColor={textoPlaceholder}
            placeholder={placeholder}
            style={estilo}
            keyboardType={tipo}
            value={texto}
            onChangeText={funcion}>
        </TextInput>
    );

}