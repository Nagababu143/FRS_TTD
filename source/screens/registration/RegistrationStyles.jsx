import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const registrationStyles = StyleSheet.create({
    container:{
        flex:1,
    },
    imgCont:{
        flex:1,
        paddingHorizontal:24,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
    },
    ttdLogo:{
        height:74,
        width:67,
        alignSelf:'center',
    },
    registerTextCont:{
        alignSelf:'center',
        gap:3,
    },
    registerText:{
        fontSize:24,
        color:Colors.black,
        fontWeight:'600',
        textAlign:'center',
    },
    registerDescription:{
        fontSize:16,
        color:Colors.black,
        fontWeight:'400',
        textAlign:'center',
    },
    inputsCont:{
        gap:15,
    },
});
