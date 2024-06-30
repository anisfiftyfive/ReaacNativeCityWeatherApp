import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherCardProps {
  temperature: number;
  humidity: number;
  condition: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, humidity, condition }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.condition}>{condition}</Text>
      <Text style={styles.humidity}>Humidity: {humidity}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 24,
    marginVertical: 10,
  },
  humidity: {
    fontSize: 16,
  },
});

export default WeatherCard;
