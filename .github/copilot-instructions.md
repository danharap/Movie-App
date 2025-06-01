# Copilot Instructions for CineMatch Movie App

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a React Native Expo app called **CineMatch** - a cross-platform movie suggestion and tracking application. The app includes:

1. 🎯 Movie suggestion system (will use OpenAI API)
2. 📚 Watch history and rating log
3. 👤 User profile and settings
4. 🔐 Authentication system

## Tech Stack
- **React Native** with **Expo SDK 53**
- **NativeWind** (Tailwind CSS for React Native)
- **React Navigation** for navigation
- **Expo Vector Icons** (@expo/vector-icons)
- **Context API** for state management

## Code Style Guidelines
- Use functional components with React Hooks
- Follow React Native best practices
- Use NativeWind/Tailwind classes for styling
- Use Expo Vector Icons from '@expo/vector-icons/Feather' for consistent iconography
- Implement proper TypeScript types when adding TypeScript
- Use SafeAreaView and StatusBar for proper mobile UI
- Keep components modular and reusable

## Current Architecture
- `App.js` - Main entry point with navigation and auth context
- Authentication managed via React Context (`AuthContext`)
- Stack navigation with conditional rendering based on auth state
- Placeholder screens for future features (suggestions, history)

## Styling Approach
- Use NativeWind classes (Tailwind CSS)
- Dark theme with gray-900 background
- Purple accent color (#7C3AED)
- Consistent spacing and rounded corners
- Mobile-first responsive design

## Future Integrations
- FastAPI backend for user data
- PostgreSQL database
- OpenAI API for movie suggestions
- Real authentication system
- Movie database API integration

## Component Guidelines
- All screens should use SafeAreaView and StatusBar
- Use TouchableOpacity for interactive elements
- Implement proper loading states and error handling
- Follow the established design patterns and color scheme
- Use ScrollView for content that might overflow
