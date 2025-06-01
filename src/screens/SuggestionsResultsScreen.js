import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  StatusBar
} from 'react-native';
import { ChevronLeft } from '@expo/vector-icons/Feather';
import MovieCard from '../components/MovieCard';

const SuggestionsResultsScreen = ({ route, navigation }) => {
  const { selectedGenres, selectedMood, selectedTone, moods, tones } = route.params;
  
  const [watchedMovies, setWatchedMovies] = useState(new Set());
  const [savedMovies, setSavedMovies] = useState(new Set());
  const [movieRatings, setMovieRatings] = useState({});

  // Mock movie data
  const mockMovies = [
    {
      id: 1,
      title: "The Grand Budapest Hotel",
      year: 2014,
      genre: "Comedy, Drama",
      summary: "A legendary concierge at a famous European hotel between the wars and his protégé become involved in a story involving the theft of a priceless painting.",
      runtime: 99,
      poster: "🏨"
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi, Drama",
      summary: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival when Earth becomes uninhabitable.",
      runtime: 169,
      poster: "🚀"
    },
    {
      id: 3,
      title: "Parasite",
      year: 2019,
      genre: "Thriller, Drama",
      summary: "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.",
      runtime: 132,
      poster: "🏠"
    },
    {
      id: 4,
      title: "La La Land",
      year: 2016,
      genre: "Romance, Musical",
      summary: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      runtime: 128,
      poster: "🎭"
    },
    {
      id: 5,
      title: "Mad Max: Fury Road",
      year: 2015,
      genre: "Action, Adventure",
      summary: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
      runtime: 120,
      poster: "🚗"
    }
  ];

  const toggleWatched = (movieId) => {
    setWatchedMovies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(movieId)) {
        newSet.delete(movieId);
      } else {
        newSet.add(movieId);
      }
      return newSet;
    });
  };

  const toggleSaved = (movieId) => {
    setSavedMovies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(movieId)) {
        newSet.delete(movieId);
      } else {
        newSet.add(movieId);
      }
      return newSet;
    });
  };

  const setRating = (movieId, rating) => {
    setMovieRatings(prev => ({ ...prev, [movieId]: rating }));
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6 pt-8">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="p-2 rounded-lg bg-white shadow-md"
            >
              <ChevronLeft size={20} color="#374151" />
            </TouchableOpacity>
            <View className="flex-1 items-center">
              <Text className="text-xl font-bold text-gray-800">Your Suggestions</Text>
              <Text className="text-gray-600 text-sm">Based on your preferences</Text>
            </View>
            <View className="w-10" />
          </View>

          {/* Selected Filters Summary */}
          <View className="bg-white rounded-xl p-4 mb-6 shadow-sm">
            <View className="flex-row flex-wrap gap-2">
              {selectedGenres.map(genre => (
                <View key={genre} className="bg-purple-100 px-2 py-1 rounded-full">
                  <Text className="text-purple-700 text-xs">{genre}</Text>
                </View>
              ))}
              {selectedMood && (
                <View className="bg-blue-100 px-2 py-1 rounded-full">
                  <Text className="text-blue-700 text-xs">
                    {moods.find(m => m.id === selectedMood)?.label}
                  </Text>
                </View>
              )}
              {selectedTone && (
                <View className="bg-green-100 px-2 py-1 rounded-full">
                  <Text className="text-green-700 text-xs">
                    {tones.find(t => t.id === selectedTone)?.label}
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Movie Cards */}
          <View>
            {mockMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isWatched={watchedMovies.has(movie.id)}
                isSaved={savedMovies.has(movie.id)}
                rating={movieRatings[movie.id]}
                onToggleWatched={toggleWatched}
                onToggleSaved={toggleSaved}
                onRate={setRating}
              />
            ))}
          </View>

          {/* New Search Button */}
          <View className="mt-8 mb-8">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-full bg-white border-2 border-purple-600 py-3 rounded-xl"
            >
              <Text className="text-purple-600 font-semibold text-center">
                Get New Suggestions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SuggestionsResultsScreen;
