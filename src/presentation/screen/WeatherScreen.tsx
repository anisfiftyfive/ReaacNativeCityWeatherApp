/**
 *  The Screen that displays weather condition.
 */
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, Alert, KeyboardAvoidingView,ActivityIndicator,
   ScrollView, Platform, TouchableOpacity } from 'react-native';
import { getWeather } from '../../data/WeatherService';
import LottieView from 'lottie-react-native';
import styles from '../styles';

const WeatherScreen: React.FC = () => {
  const [city, setCity] = useState('London'); // Default city
const [weather, setWeather] = useState<any>(null);
const [loading, setLoading] = useState(false);

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      const data = await getWeather(city);
      const { location, current } = data;
      
      // Sets the fields from the response received. 
      setWeather({
        location: {
          name: location.name ?? "",
          country: location.country ?? "",
        },
        current: {
          humidity: current.humidity ?? "",
          temp_c: current.temp_c ?? "",
          precip_mm: current.precip_mm ?? "",
          wind_kph: current.wind_kph ?? "",
          condition: current.condition.text ?? "",
        },
      });
      setLoading(false);
      setCity('');
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Could not fetch weather data.');
    }
  };

  const Loader = () => (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  useEffect(() => {
    // Fetches the weather.
    fetchWeather(city);
  }, []);

  return (
    
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        
        <View style={styles.searchContainer}>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search city"
            value={city}
            onChangeText={setCity}
          />
          <TouchableOpacity style={styles.searchButton} onPress={() =>
           fetchWeather(city)
          }>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        </View>
  
        <View style={styles.animationContainer}>
        <View style={styles.animBox}>
          <LottieView
            source={getAnimationSource(weather?.current.condition)}
            autoPlay
            loop
            style={styles.animation}
          />
          {loading && <Loader/>}
           </View>
          <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 30
          }}>
          <Text style={{fontSize: 80, lineHeight: 80, color: '#000', fontFamily: 'sans-serif-light'}}>
            {weather?.current.temp_c}
          </Text>
          <Text style={{fontSize: 24, lineHeight: 24}}>
          °C
          </Text>
        </View>
        <Text style={{fontSize:26, color: '#000', fontFamily: 'sans-serif-light', textAlign: 'center'}}>
            {weather?.location.name}, {weather?.location.country}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
        <View style={styles.textButtonContainer}>
        <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.text}>{weather?.current.humidity}</Text>
            <Text style={styles.textSmall}>Humidity</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>{weather?.current.wind_kph}</Text>
            <Text style={styles.textSmall}>Wind (Km/h)</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>{weather?.current.precip_mm}</Text>
            <Text style={styles.textSmall}>Preception (mm)</Text>
          </View>
        </View>
      </View>
        </View>
        </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


/**
 * Method that sets the animation as per the weather
 * @param condition the weather condition.
 * @returns 
 */
const getAnimationSource = (condition: string) => {
  // Construct the source path dynamically based on location name
  if(condition == 'Sunny'){
    return require('../../assets/sunny.json');
  }
  else if(condition === 'Mist'){
    return require('../../assets/misty.json');
  }
  else if(condition === 'Partly cloudy'){
    return require('../../assets/partly_cloudy.json');
  }
  else if(condition === 'Cloudy'){
    return require('../../assets/cloudy.json');
  }
  else if(condition === 'Overcast'){
    return require('../../assets/cloudy.json');
  }
  else if(condition === 'Light rain'){
    return require('../../assets/drizzle.json');
  }
  else if(condition === 'Torrential rain shower'){
    return require('../../assets/drizzle.json');
  }
  else if(condition === 'Moderate or heavy rain shower'){
    return require('../../assets/drizzle.json');
  }
  else if(condition === 'Rainy'){
    return require('../../assets/drizzle.json');
  }
  else{
    return require('../../assets/sunny.json');
  }
};

export default WeatherScreen;
