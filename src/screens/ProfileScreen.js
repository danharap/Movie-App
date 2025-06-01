import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView
} from 'react-native';
import { User, Settings, LogOut, Star, Clock, Heart } from '@expo/vector-icons/Feather';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const ProfileSection = ({ icon: Icon, title, subtitle, onPress }) => (
    <TouchableOpacity 
      className="flex-row items-center bg-gray-800 p-4 rounded-xl mb-3"
      onPress={onPress}
    >
      <View className="bg-purple-600 p-3 rounded-full mr-4">
        <Icon size={20} color="white" />
      </View>
      <View className="flex-1">
        <Text className="text-white text-lg font-semibold">{title}</Text>
        {subtitle && <Text className="text-gray-400 text-sm">{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      
      <ScrollView className="flex-1 px-6 pt-8">
        {/* Header */}
        <View className="items-center mb-8">
          <View className="bg-purple-600 w-24 h-24 rounded-full items-center justify-center mb-4">
            <User size={40} color="white" />
          </View>
          <Text className="text-white text-2xl font-bold">{user?.name || 'User'}</Text>
          <Text className="text-gray-400 text-base">{user?.email || 'user@example.com'}</Text>
        </View>

        {/* Stats Section */}
        <View className="flex-row justify-around bg-gray-800 p-6 rounded-xl mb-6">
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">42</Text>
            <Text className="text-gray-400 text-sm">Movies Watched</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">8.5</Text>
            <Text className="text-gray-400 text-sm">Avg Rating</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">15</Text>
            <Text className="text-gray-400 text-sm">Watchlist</Text>
          </View>
        </View>

        {/* Profile Options */}
        <Text className="text-white text-xl font-bold mb-4">Account</Text>
        
        <ProfileSection
          icon={Star}
          title="My Ratings"
          subtitle="View and manage your movie ratings"
          onPress={() => {/* Navigate to ratings */}}
        />
        
        <ProfileSection
          icon={Heart}
          title="Watchlist"
          subtitle="Movies you want to watch"
          onPress={() => {/* Navigate to watchlist */}}
        />
        
        <ProfileSection
          icon={Clock}
          title="Watch History"
          subtitle="All the movies you've watched"
          onPress={() => navigation.navigate('History')}
        />
        
        <ProfileSection
          icon={Settings}
          title="Settings"
          subtitle="App preferences and account settings"
          onPress={() => {/* Navigate to settings */}}
        />

        {/* Logout Button */}
        <TouchableOpacity 
          className="flex-row items-center justify-center bg-red-600 p-4 rounded-xl mt-6 mb-8"
          onPress={handleLogout}
        >
          <LogOut size={20} color="white" className="mr-2" />
          <Text className="text-white text-lg font-semibold ml-2">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
