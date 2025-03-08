import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';


const baseBtnCont = {
    borderWidth:2,
    borderRadius:10,
    paddingVertical:12,
};

const baseBtnText = {
    fontSize:18,
    fontWeight:'400',
    textAlign:'center',
};

export const appButtonStyles = StyleSheet.create({
    defaultButton:{
        ...baseBtnCont,
        borderColor:Colors.cinnabar,
        backgroundColor:Colors.cinderella,
    },
    defaultButtonText:{
        ...baseBtnText,
        color:Colors.pomegranate,
    },
    lgButton:{
        ...baseBtnCont,
        borderColor:Colors.geraldine,
    },
    lgButtonText:{
        ...baseBtnText,
        color:Colors.white,
    },
});
