import './global.css';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import components
import { AuthProvider, useAuth } from './src/context/AuthContext';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SuggestionsFormScreen from './src/screens/SuggestionsFormScreen';
import SuggestionsResultsScreen from './src/screens/SuggestionsResultsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Stack = createStackNavigator();

// Main App Navigation
const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SuggestionsForm" component={SuggestionsFormScreen} />
            <Stack.Screen name="SuggestionsResults" component={SuggestionsResultsScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Main App Component
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
