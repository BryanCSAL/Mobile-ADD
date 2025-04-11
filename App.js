import { View, Text } from 'react-native';
import React, { useState } from 'react';

import Button from './components/button';
import MinusButton from './components/minusButton';

var thisNum = 0;

export default function App() {
  const [num, setNum] = useState(null); // Estado para armazenar o número gerado

  const handlePress = () => {
     thisNum = thisNum + 1;
    setNum(thisNum);
  };
  const handlePressMinus = () => {
     thisNum = thisNum - 1;
    setNum(thisNum);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        {num !== null ? num : 'Pressione o botão'}
      </Text>
      
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30 }}>
        <Button onPress={handlePress} />
        <MinusButton onPress={handlePressMinus} />
      </View>
    </View>
  );
}
