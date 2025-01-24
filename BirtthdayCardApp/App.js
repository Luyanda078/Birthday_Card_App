import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [cardText, setCardText] = useState('Happy Birthday!');
  const [imageUri, setImageUri] = useState(null);
  const [textColor, setTextColor] = useState('#000');
  const [textSize, setTextSize] = useState(24);

  // Pick an image
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        <Text style={[styles.text, { color: textColor, fontSize: textSize }]}>
          {cardText}
        </Text>
      </View>

      {/* Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Card Text"
        value={cardText}
        onChangeText={setCardText}
      />

      {/* Image Picker */}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>

      {/* Text Formatting */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.controlButton, { backgroundColor: '#000' }]}
          onPress={() => setTextColor('#000')}
        />
        <TouchableOpacity
          style={[styles.controlButton, { backgroundColor: '#f00' }]}
          onPress={() => setTextColor('#f00')}
        />
        <TouchableOpacity
          style={[styles.controlButton, { backgroundColor: '#00f' }]}
          onPress={() => setTextColor('#00f')}
        />
        <TouchableOpacity onPress={() => setTextSize((size) => size + 2)}>
          <Text style={styles.controlText}>A+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTextSize((size) => size - 2)}>
          <Text style={styles.controlText}>A-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  controlButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  controlText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
