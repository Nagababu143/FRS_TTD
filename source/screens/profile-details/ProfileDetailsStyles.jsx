import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const profileDetailsStyles = StyleSheet.create({
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
    mainText:{
        fontSize:24,
        color:Colors.black,
        fontWeight:'600',
        textAlign:'center',
    },
    profileDetailsCont:{
        display:'flex',
        flexDirection:'column',
        gap:10,
        marginTop:25,
    },
});
