import { Image, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { validationStyles } from './ValidationStyles';

const Validation = () => {
  return (
    <View style={validationStyles.container}>
      <ImageBackground resizeMode="cover" style={validationStyles.imgCont} source={require('../../assets/banners/validation_banner.png')} alt="Validation_Banner" >
        <Image style={validationStyles.ttdLogo} source={require('../../assets/logos/ttd_logo.png')} alt="TTD_logo"/>
        <Text style={validationStyles.progressText}>Hold still, we're processing</Text>
      </ImageBackground>
    </View>
  );
};

export default Validation;
