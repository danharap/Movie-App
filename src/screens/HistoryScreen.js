import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Clock, Star, Calendar, Filter } from '@expo/vector-icons/Feather';

const HistoryScreen = () => {
  // Mock data for demonstration
  const watchHistory = [
    {
      id: 1,
      title: "The Dark Knight",
      genre: "Action",
      rating: 5,
      watchedDate: "2024-05-15",
      poster: "🦇"
    },
    {
      id: 2,
      title: "Inception",
      genre: "Sci-Fi",
      rating: 4,
      watchedDate: "2024-05-10",
      poster: "🌀"
    },
    {
      id: 3,
      title: "Parasite",
      genre: "Thriller",
      rating: 5,
      watchedDate: "2024-05-05",
      poster: "🏠"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        color={index < rating ? "#FCD34D" : "#374151"}
        fill={index < rating ? "#FCD34D" : "none"}
      />
    ));
  };

  const HistoryItem = ({ movie }) => (
    <View className="bg-gray-800 p-4 rounded-xl mb-3">
      <View className="flex-row items-center">
        <View className="bg-purple-600 w-16 h-16 rounded-lg items-center justify-center mr-4">
          <Text className="text-2xl">{movie.poster}</Text>
        </View>
        
        <View className="flex-1">
          <Text className="text-white text-lg font-semibold">{movie.title}</Text>
          <Text className="text-gray-400 text-sm mb-2">{movie.genre}</Text>
          
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              {renderStars(movie.rating)}
            </View>
            <Text className="text-gray-400 text-sm">{movie.watchedDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      
      <View className="flex-1 px-6 pt-8">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <View>
            <Text className="text-white text-2xl font-bold">Watch History</Text>
            <Text className="text-gray-400">Movies you've watched and rated</Text>
          </View>
          
          <TouchableOpacity className="bg-gray-800 p-3 rounded-full">
            <Filter size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View className="flex-row justify-around bg-gray-800 p-4 rounded-xl mb-6">
          <View className="items-center">
            <Clock size={20} color="#7C3AED" />
            <Text className="text-white text-lg font-bold mt-1">{watchHistory.length}</Text>
            <Text className="text-gray-400 text-xs">Total Movies</Text>
          </View>
          
          <View className="items-center">
            <Star size={20} color="#FCD34D" />
            <Text className="text-white text-lg font-bold mt-1">4.7</Text>
            <Text className="text-gray-400 text-xs">Avg Rating</Text>
          </View>
          
          <View className="items-center">
            <Calendar size={20} color="#10B981" />
            <Text className="text-white text-lg font-bold mt-1">This Month</Text>
            <Text className="text-gray-400 text-xs">3 Movies</Text>
          </View>
        </View>

        {/* History List */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {watchHistory.length > 0 ? (
            watchHistory.map((movie) => (
              <HistoryItem key={movie.id} movie={movie} />
            ))
          ) : (
            <View className="items-center py-12">
              <Clock size={64} color="#6B7280" />
              <Text className="text-gray-400 text-lg mt-4">No watch history yet</Text>
              <Text className="text-gray-500 text-center mt-2">
                Start watching movies and they'll appear here
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;
