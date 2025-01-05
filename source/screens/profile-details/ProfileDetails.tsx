import { Image, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { profileDetailsStyles } from './ProfileDetailsStyles';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import AppButton from '../../components/app-button/AppButton';
import { navigate } from '../../utils/NavigationType';


const PROFILE_INFO_MOCK_DATA = [
    {
        title:'Full name',
        value:'Ravi Keerthy',
    },
    {
        title:'Aadhar number',
        value:'123456789012',
        masked:true,
    },
    {
        title:'Phone number',
        value:'+91 9876543210',
    },
];

const ProfileDetails = () => {
  return (
    <View style={profileDetailsStyles.container}>
      <ImageBackground resizeMode="cover" style={profileDetailsStyles.imgCont} source={require('../../assets/banners/registration_banner.png')} alt="Registration_Banner">
      <Image style={profileDetailsStyles.ttdLogo} source={require('../../assets/logos/ttd_logo.png')} />
      <View>
        <Text style={profileDetailsStyles.mainText}>Profile validate Details</Text>
        <View style={profileDetailsStyles.profileDetailsCont}>
            {
                PROFILE_INFO_MOCK_DATA.map((each , index)=><ProfileInfo key={index} title={each.title} value={each.value} masked={each?.masked} />)
            }
        </View>
      </View>
      <AppButton title="Done" appearance="gradient" onButtonPress={()=>navigate('Landing')} />
      </ImageBackground>
    </View>
  );
};

export default ProfileDetails;
