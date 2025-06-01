import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Sparkles, Film, Search, ChevronRight } from '@expo/vector-icons/Feather';
import GenreSelector from '../components/GenreSelector';
import MoodSelector from '../components/MoodSelector';
import ToneSelector from '../components/ToneSelector';

const SuggestionsFormScreen = ({ navigation }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedTone, setSelectedTone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const genres = [
    'Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 
    'Romance', 'Thriller', 'Mystery', 'Fantasy', 'Animation', 'Documentary'
  ];

  const moods = [
    { id: 'happy', label: 'Happy', emoji: '😊' },
    { id: 'sad', label: 'Sad', emoji: '😢' },
    { id: 'excited', label: 'Excited', emoji: '🤩' },
    { id: 'relaxed', label: 'Relaxed', emoji: '😌' },
    { id: 'adventurous', label: 'Adventurous', emoji: '🗺️' },
    { id: 'nostalgic', label: 'Nostalgic', emoji: '💭' }
  ];

  const tones = [
    { id: 'casual', label: 'Casual & Fun' },
    { id: 'serious', label: 'Serious & Deep' },
    { id: 'thought-provoking', label: 'Thought-Provoking' },
    { id: 'lighthearted', label: 'Lighthearted' }
  ];

  const toggleGenre = (genre) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleSubmit = () => {
    navigation.navigate('SuggestionsResults', {
      selectedGenres,
      selectedMood,
      selectedTone,
      additionalInfo,
      moods,
      tones
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 p-4">
          {/* Header */}
          <View className="items-center mb-8 pt-8">
            <View className="flex-row items-center gap-2 mb-2">
              <Sparkles color="#7C3AED" size={24} />
              <Text className="text-2xl font-bold text-gray-800">Movie Magic</Text>
            </View>
            <Text className="text-gray-600">Let's find your perfect movie!</Text>
          </View>

          {/* Form */}
          <View className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            {/* Genres */}
            <View className="flex-row items-center gap-2 mb-3">
              <Film size={20} color="#374151" />
              <GenreSelector 
                genres={genres}
                selectedGenres={selectedGenres}
                onToggleGenre={toggleGenre}
              />
            </View>

            {/* Mood */}
            <MoodSelector 
              moods={moods}
              selectedMood={selectedMood}
              onSelectMood={setSelectedMood}
            />

            {/* Tone */}
            <ToneSelector 
              tones={tones}
              selectedTone={selectedTone}
              onSelectTone={setSelectedTone}
            />

            {/* Additional Info */}
            <View>
              <Text className="text-lg font-semibold text-gray-800 mb-3">
                Additional Info (Optional)
              </Text>
              <TextInput
                value={additionalInfo}
                onChangeText={setAdditionalInfo}
                placeholder="Any specific preferences, favorite actors, or themes you'd like?"
                placeholderTextColor="#9CA3AF"
                className="w-full p-3 border border-gray-200 rounded-xl text-gray-800"
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              onPress={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-xl shadow-lg flex-row items-center justify-center gap-2"
              style={{
                backgroundColor: '#7C3AED', // fallback for gradient
              }}
            >
              <Search size={20} color="white" />
              <Text className="text-white font-semibold text-lg">Find My Movies</Text>
              <ChevronRight size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SuggestionsFormScreen;
