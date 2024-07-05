import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handlePress = (input) => {
    if (input === 'C') {
      setDisplayValue('0');
    } else if (input === '=') {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else {
      if (displayValue === '0' || displayValue === 'Error') {
        setDisplayValue(input);
      } else {
        setDisplayValue(displayValue + input);
      }
    }
  };

  const renderButton = (input) => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => handlePress(input)}>
        <Text style={styles.buttonText}>{input}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.row}>
        {renderButton('C')}
        {renderButton('*')}
        {renderButton('/')}
      </View>
      <View style={styles.row}>
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('+')}
      </View>
      <View style={styles.row}>
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </View>
      <View style={styles.row}>
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('=')}
      </View>
      <View style={styles.row}>
        {renderButton('0')}
        {renderButton('.')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  display: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: '#34495e',
  },
  displayText: {
    fontSize: 40,
    color: '#34495e',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '90%',
  },
  button: {
    backgroundColor: '#0000CD',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '22%',
    height: 70,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
});
