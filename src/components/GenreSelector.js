import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GenreSelector = ({ genres, selectedGenres, onToggleGenre }) => {
  return (
    <View>
      <Text className="text-lg font-semibold text-gray-800 mb-3">Genres</Text>
      <View className="flex-row flex-wrap gap-2">
        {genres.map((genre) => (
          <TouchableOpacity
            key={genre}
            onPress={() => onToggleGenre(genre)}
            className={`px-3 py-2 rounded-full ${
              selectedGenres.includes(genre)
                ? 'bg-purple-600'
                : 'bg-gray-100'
            }`}
          >
            <Text className={`text-sm font-medium ${
              selectedGenres.includes(genre)
                ? 'text-white'
                : 'text-gray-700'
            }`}>
              {genre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default GenreSelector;
