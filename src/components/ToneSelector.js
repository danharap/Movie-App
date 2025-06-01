import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ToneSelector = ({ tones, selectedTone, onSelectTone }) => {
  return (
    <View>
      <Text className="text-lg font-semibold text-gray-800 mb-3">Tone</Text>
      <View className="space-y-2">
        {tones.map((tone) => (
          <TouchableOpacity
            key={tone.id}
            onPress={() => onSelectTone(tone.id)}
            className={`w-full p-3 rounded-xl border-2 ${
              selectedTone === tone.id
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <Text className={`text-sm font-medium ${
              selectedTone === tone.id
                ? 'text-purple-700'
                : 'text-gray-700'
            }`}>
              {tone.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ToneSelector;
