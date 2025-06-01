import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  StatusBar
} from 'react-native';
import { User, Film, Clock, Settings } from '@expo/vector-icons/Feather';
import { useAuth } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      <ScrollView>
        <View className="max-w-md mx-auto">
          {/* Header */}
          <View className="px-6 pt-8 pb-6">
            <View className="flex-row justify-between items-center mb-8">
              <View>
                <Text className="text-gray-400 text-base">Welcome back,</Text>
                <Text className="text-white text-2xl font-bold">{user?.name}</Text>
              </View>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile')}
                className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center"
              >
                <User color="white" size={24} />
              </TouchableOpacity>
            </View>

            {/* Quick Stats */}
            <View className="bg-gray-800 rounded-2xl p-6 mb-8">
              <Text className="text-white text-lg font-semibold mb-4">Your Movie Journey</Text>
              <View className="flex-row justify-between">
                <View className="items-center">
                  <Text className="text-purple-400 text-2xl font-bold">42</Text>
                  <Text className="text-gray-400 text-sm">Movies Watched</Text>
                </View>
                <View className="items-center">
                  <Text className="text-blue-400 text-2xl font-bold">8.2</Text>
                  <Text className="text-gray-400 text-sm">Avg Rating</Text>
                </View>
                <View className="items-center">
                  <Text className="text-green-400 text-2xl font-bold">15</Text>
                  <Text className="text-gray-400 text-sm">This Month</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Main Actions */}
          <View className="px-6 space-y-4">
            <TouchableOpacity
              onPress={() => navigation.navigate('SuggestionsForm')}
              className="w-full bg-purple-600 rounded-2xl p-6"
              style={{
                backgroundColor: '#7C3AED', // Solid purple background
              }}
            >
              <View className="flex-row items-center">
                <View className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Film color="white" size={24} />
                </View>
                <View className="flex-1">
                  <Text className="text-white text-xl font-bold mb-1">Get Movie Suggestions</Text>
                  <Text className="text-purple-100">Discover personalized recommendations</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('History')}
              className="w-full bg-gray-800 rounded-2xl p-6"
            >
              <View className="flex-row items-center">
                <View className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Clock color="white" size={24} />
                </View>
                <View className="flex-1">
                  <Text className="text-white text-xl font-bold mb-1">View Watch History</Text>
                  <Text className="text-gray-400">Browse your movie collection</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              className="w-full bg-gray-800 rounded-2xl p-6"
            >
              <View className="flex-row items-center">
                <View className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Settings color="white" size={24} />
                </View>
                <View className="flex-1">
                  <Text className="text-white text-xl font-bold mb-1">Go to Profile</Text>
                  <Text className="text-gray-400">Manage account settings</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Recent Activity Preview */}
          <View className="px-6 pt-8 pb-6">
            <Text className="text-white text-xl font-bold mb-4">Recent Activity</Text>
            <View className="space-y-3">
              {[
                { title: 'The Dark Knight', rating: '4.5' },
                { title: 'Inception', rating: '4.8' },
                { title: 'Interstellar', rating: '4.2' }
              ].map((movie, index) => (
                <TouchableOpacity key={index} className="flex-row items-center bg-gray-800 rounded-xl p-4">
                  <View className="w-12 h-16 bg-gray-700 rounded-lg mr-4 flex items-center justify-center">
                    <Film color="#6B7280" size={16} />
                  </View>
                  <View className="flex-1">
                    <Text className="text-white font-medium">{movie.title}</Text>
                    <Text className="text-gray-400 text-sm">Watched 2 days ago</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Text className="text-yellow-400 font-bold mr-1">★</Text>
                    <Text className="text-gray-300">{movie.rating}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
