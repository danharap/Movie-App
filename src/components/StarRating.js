import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Star } from '@expo/vector-icons/Feather';

const StarRating = ({ movieId, currentRating, onRate }) => {
  return (
    <View className="flex-row gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => onRate(movieId, star)}
        >
          <Star 
            size={16} 
            color={star <= (currentRating || 0) ? "#FBBF24" : "#D1D5DB"}
            fill={star <= (currentRating || 0) ? "#FBBF24" : "transparent"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StarRating;
