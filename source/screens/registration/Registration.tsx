import { Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import React, { useState } from 'react';
import InputRenderer from '../../components/input-renderer/InputRenderer';
import { registrationStyles } from './RegistrationStyles';
import { IInputRenderer } from '../../interfaces/IInputRenderer';
import CheckBox from '../../components/check-box/CheckBox';
import AppButton from '../../components/app-button/AppButton';
import { navigate } from '../../utils/NavigationType';


const registrationFormAttributes:IInputRenderer[] = [
  {
    label:'Full name',
  },
  {
    label:'Aadhar number',
    keyboardType:'number-pad',
  },
  {
    label:'Phone number',
    keyboardType:'number-pad',
  },
];

const Registration = () => {
  const [termsChecked , setTermsChecked] = useState<boolean>(false);
  const registrationHandler = () => {
    navigate('ProfileDetails');
  };
  return (
    <ScrollView contentContainerStyle={registrationStyles.container}>
      <ImageBackground resizeMode="cover" style={registrationStyles.imgCont} source={require('../../assets/banners/registration_banner.png')} alt="Registration_Banner">
        <Image style={registrationStyles.ttdLogo} source={require('../../assets/logos/ttd_logo.png')} />
        <View style={registrationStyles.registerTextCont}>
            <Text style={registrationStyles.registerText}>
              Get register now
            </Text>
            <Text style={registrationStyles.registerDescription}>Create your profile to continue</Text>
          </View>
        <View style={registrationStyles.inputsCont}>
        {
          registrationFormAttributes.map((each,index)=> <InputRenderer key={index} label={each.label} keyboardType={each.keyboardType}/>)
        }
        <CheckBox label="Agree terms & conditions" checked={termsChecked} setChecked={setTermsChecked}/>
        </View>
        <AppButton title="Register" appearance="gradient" onButtonPress={registrationHandler}/>
      </ImageBackground>
    </ScrollView>
  );
};

export default Registration;
