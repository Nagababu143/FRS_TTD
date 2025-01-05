import { Text, View , SafeAreaView, ImageBackground, Image} from 'react-native';
import React from 'react';
import { landingStyles } from './LandingStyles';
import AppButton from '../../components/app-button/AppButton';
import { navigate } from '../../utils/NavigationType';

const Landing = () => {
  return (
    <SafeAreaView style={landingStyles.container}>
      <ImageBackground source={require('../../assets/banners/ttd_banner.png')} resizeMode="cover" style={landingStyles.imgCont}>
            <Image style={landingStyles.ttdLogo} source={require('../../assets/logos/ttd_logo.png')} resizeMode="cover"/>
            <View>
                <View>
                    <Text style={landingStyles.scanMeText}>Scan me</Text>
                    <Image style={landingStyles.scanLogo} source={require('../../assets/logos/scan_logo.png')} resizeMode="cover" />
                </View>
                <View>
                    <Text style={landingStyles.frText}>Face recognition</Text>
                    <Text style={landingStyles.frDescription}>Scan your face to verify your identity</Text>
                </View>
            </View>
            <View style={landingStyles.buttonsCont}>
                <AppButton title="Validation" onButtonPress={()=>navigate('Validation')} />
                <AppButton title="Register" appearance="gradient" onButtonPress={()=>navigate('Registration')} />
            </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Landing;
