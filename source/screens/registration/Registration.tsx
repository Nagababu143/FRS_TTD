import { Image, ImageBackground, ScrollView, Text, View, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import InputRenderer from '../../components/input-renderer/InputRenderer';
import { registrationStyles } from './RegistrationStyles';
import { IInputRenderer } from '../../interfaces/IInputRenderer';
import CheckBox from '../../components/check-box/CheckBox';
import AppButton from '../../components/app-button/AppButton';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
  const route = useRoute();
  const { imageBuffer } = route.params || {}; // Get imageBuffer from navigation params

  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ Middle Loader state

  // Handle form submission
  const registrationHandler = async () => {
    if (!fullName || !aadharNumber || !phoneNumber) {
      Alert.alert('Error', 'All fields are required, including agreeing to terms & conditions.');
      return;
    }

    setLoading(true); // ✅ Show Loader

    const payload = {
      fullName,
      aadharNumber,
      phoneNumber,
      image: imageBuffer, // Base64 image buffer
      type: "registration",
    };

    try {
      const response = await fetch('https://yt0321nob3.execute-api.us-east-1.amazonaws.com/dev/TTD_FRS', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    

      const result = await response.json();
      console.log("response",result)
      const responseBody = typeof result.body === "string" ? JSON.parse(result.body) : result.body;
      console.log(responseBody)

      if (result.statusCode === 200) {
        Alert.alert(
          "Success",
          responseBody.message || "Registration completed successfully!",
          [{ 
            text: "OK", 
            onPress: () => navigation.navigate("ProfileDetails", { data: responseBody }) 
          }]
        );
      } else {
        Alert.alert(
          "Error",
          responseBody.message || "Something went wrong.",
          [{ text: "OK", onPress: () => navigation.navigate("Landing") }] 
        );
      }
    } catch (error) {
      console.error("Error:", error);
     // Alert.alert(JSON.stringify(error))
      Alert.alert("Error", "An unexpected error occurred.");
    } finally {
      setLoading(false); // ✅ Hide Loader
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView 
        contentContainerStyle={registrationStyles.container}
        pointerEvents={loading ? 'none' : 'auto'} // ✅ Prevents user interaction
      >
        <ImageBackground resizeMode="cover" style={registrationStyles.imgCont} source={require('../../assets/banners/registration_banner.png')}>
          <Image style={registrationStyles.ttdLogo} source={require('../../assets/logos/ttd_logo.png')} />
          <View style={registrationStyles.registerTextCont}>
            <Text style={registrationStyles.registerText}>Get registered now</Text>
            <Text style={registrationStyles.registerDescription}>Create your profile to continue</Text>
          </View>

          {imageBuffer && <Image source={{ uri: `data:image/jpeg;base64,${imageBuffer}` }} style={registrationStyles.imagePreview} />}

          <View style={registrationStyles.inputsCont}>
            <InputRenderer label="Full Name" value={fullName} onChangeText={setFullName} />
            <InputRenderer label="Aadhar Number" value={aadharNumber} keyboardType="number-pad" onChangeText={setAadharNumber} />
            <InputRenderer label="Phone Number" value={phoneNumber} keyboardType="number-pad" onChangeText={setPhoneNumber} />
            <CheckBox label="Agree terms & conditions" checked={termsChecked} setChecked={setTermsChecked} />
          </View>

          <AppButton 
            title="Register" 
            appearance="gradient" 
            onButtonPress={registrationHandler} 
            disabled={loading} // ✅ Button disabled while loading
          />
        </ImageBackground>
      </ScrollView>

      {/* ✅ Middle of the Page Loader */}
      {loading && (
        <View style={registrationStyles.loaderOverlay}>
          <View style={registrationStyles.loaderBox}>
            <ActivityIndicator size="large" color="white" />
            <Text style={registrationStyles.loaderText}>Processing...</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Registration;
