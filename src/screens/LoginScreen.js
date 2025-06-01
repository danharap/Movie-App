import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StatusBar,
  SafeAreaView
} from 'react-native';
import { User, Eye, EyeOff, Mail, Lock, Film } from '@expo/vector-icons/Feather';
import { useAuth } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login, formData, setFormData } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = () => {
    login();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
          <View className="flex-1 justify-center">
            {/* Header */}
            <View className="items-center mb-12">
              <View className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film color="white" size={32} />
              </View>
              <Text className="text-3xl font-bold text-white mb-2">CineMatch</Text>
              <Text className="text-gray-400 text-center">
                Discover your next favorite movie
              </Text>
            </View>

            {/* Auth Toggle */}
            <View className="flex-row bg-gray-800 rounded-xl p-1 mb-8">
              <TouchableOpacity
                onPress={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-lg ${
                  isLogin ? 'bg-purple-600' : ''
                }`}
              >
                <Text className={`text-center font-medium ${
                  isLogin ? 'text-white' : 'text-gray-400'
                }`}>
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-lg ${
                  !isLogin ? 'bg-purple-600' : ''
                }`}
              >
                <Text className={`text-center font-medium ${
                  !isLogin ? 'text-white' : 'text-gray-400'
                }`}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Form */}
            <View className="space-y-4">
              {!isLogin && (
                <View>
                  <Text className="text-gray-300 mb-2 font-medium">Full Name</Text>
                  <View className="flex-row items-center bg-gray-800 rounded-xl px-4 py-4">
                    <User color="#9CA3AF" size={20} />
                    <TextInput
                      className="flex-1 ml-3 text-white"
                      placeholder="Enter your name"
                      placeholderTextColor="#6B7280"
                      value={formData.name}
                      onChangeText={(text) => setFormData({...formData, name: text})}
                    />
                  </View>
                </View>
              )}

              <View>
                <Text className="text-gray-300 mb-2 font-medium">Email</Text>
                <View className="flex-row items-center bg-gray-800 rounded-xl px-4 py-4">
                  <Mail color="#9CA3AF" size={20} />
                  <TextInput
                    className="flex-1 ml-3 text-white"
                    placeholder="Enter your email"
                    placeholderTextColor="#6B7280"
                    value={formData.email}
                    onChangeText={(text) => setFormData({...formData, email: text})}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View>
                <Text className="text-gray-300 mb-2 font-medium">Password</Text>
                <View className="flex-row items-center bg-gray-800 rounded-xl px-4 py-4">
                  <Lock color="#9CA3AF" size={20} />
                  <TextInput
                    className="flex-1 ml-3 text-white"
                    placeholder="Enter your password"
                    placeholderTextColor="#6B7280"
                    value={formData.password}
                    onChangeText={(text) => setFormData({...formData, password: text})}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <EyeOff color="#9CA3AF" size={20} />
                    ) : (
                      <Eye color="#9CA3AF" size={20} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              onPress={handleAuth}
              className="w-full bg-purple-600 rounded-xl py-4 mt-8"
            >
              <Text className="text-white font-semibold text-lg text-center">
                {isLogin ? 'Login' : 'Create Account'}
              </Text>
            </TouchableOpacity>

            {/* Footer */}
            <View className="items-center mt-8">
              <Text className="text-gray-400">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <Text 
                  className="text-purple-400 font-medium"
                  onPress={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign up' : 'Login'}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
