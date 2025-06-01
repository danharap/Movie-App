import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar, Clock, Heart } from '@expo/vector-icons/Feather';
import StarRating from './StarRating';

const MovieCard = ({ 
  movie, 
  isWatched, 
  isSaved, 
  rating, 
  onToggleWatched, 
  onToggleSaved, 
  onRate 
}) => {
  return (
    <View className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
      {/* Movie Header */}
      <View className="p-4 border-b border-gray-100">
        <View className="flex-row items-start gap-3">
          <Text className="text-4xl">{movie.poster}</Text>
          <View className="flex-1">
            <Text className="font-bold text-lg text-gray-800">{movie.title}</Text>
            <View className="flex-row items-center gap-3 mt-1">
              <View className="flex-row items-center gap-1">
                <Calendar size={14} color="#6B7280" />
                <Text className="text-sm text-gray-600">{movie.year}</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Clock size={14} color="#6B7280" />
                <Text className="text-sm text-gray-600">{movie.runtime}m</Text>
              </View>
            </View>
            <View className="mt-2">
              <Text className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {movie.genre}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Movie Summary */}
      <View className="p-4">
        <Text className="text-gray-700 text-sm leading-relaxed">{movie.summary}</Text>
      </View>

      {/* Action Buttons */}
      <View className="p-4 bg-gray-50 space-y-3">
        {/* Rating */}
        <View className="flex-row items-center justify-between">
          <Text className="text-sm font-medium text-gray-700">Rate this movie:</Text>
          <StarRating movieId={movie.id} currentRating={rating} onRate={onRate} />
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => onToggleWatched(movie.id)}
            className={`flex-1 py-2 px-3 rounded-lg ${
              isWatched
                ? 'bg-green-600'
                : 'bg-white border border-gray-200'
            }`}
          >
            <Text className={`text-sm font-medium text-center ${
              isWatched ? 'text-white' : 'text-gray-700'
            }`}>
              {isWatched ? '✓ Watched' : 'Mark as Watched'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => onToggleSaved(movie.id)}
            className={`py-2 px-3 rounded-lg ${
              isSaved
                ? 'bg-red-600'
                : 'bg-white border border-gray-200'
            }`}
          >
            <Heart 
              size={16} 
              color={isSaved ? "white" : "#6B7280"}
              fill={isSaved ? "white" : "transparent"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;
