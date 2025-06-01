import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MoodSelector = ({ moods, selectedMood, onSelectMood }) => {
  return (
    <View>
      <Text className="text-lg font-semibold text-gray-800 mb-3">Mood</Text>
      <View className="flex-row flex-wrap gap-2">
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood.id}
            onPress={() => onSelectMood(mood.id)}
            className={`p-3 rounded-xl border-2 flex-1 min-w-0 ${
              selectedMood === mood.id
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 bg-white'
            }`}
            style={{ minWidth: '45%' }}
          >
            <Text className="text-xl mb-1 text-center">{mood.emoji}</Text>
            <Text className={`text-sm font-medium text-center ${
              selectedMood === mood.id
                ? 'text-purple-700'
                : 'text-gray-700'
            }`}>
              {mood.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MoodSelector;
