import React from 'react';
import {Text, View} from 'react-native';
import SortableGrid from 'react-native-sortable-grid';

export default function App() {
  return (
    <View>
      <Text>SortableGrid</Text>
      <SortableGrid>
        {['a', 'b', 'c'].map((letter, index) => (
          <View
            key={index}
            style={{
              height: 100,
              width: 100,
              margin: 10,
              backgroundColor: 'red',
            }}>
            <Text>{letter}</Text>
          </View>
        ))}
      </SortableGrid>
    </View>
  );
}
