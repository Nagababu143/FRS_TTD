import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const validationStyles = StyleSheet.create({
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
    progressText:{
        fontSize:24,
        color:Colors.alizarinCrimson,
        fontWeight:'500',
        textAlign:'center',
    },
});
