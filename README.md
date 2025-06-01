# CineMatch - Movie Suggestion & Tracking App

A cross-platform React Native Expo app for discovering and tracking movies.

## 🎯 Features

- **Movie Suggestions**: Get personalized movie recommendations (OpenAI integration planned)
- **Watch History**: Track and rate movies you've watched
- **User Profiles**: Manage your account and preferences
- **Authentication**: Secure login and registration

## 🚀 Tech Stack

- **React Native** with **Expo SDK 53**
- **NativeWind** (Tailwind CSS for React Native)
- **React Navigation** for screen navigation
- **Expo Vector Icons** for consistent iconography
- **Context API** for state management

## 📱 Getting Started

### Prerequisites

- Node.js (v18 or later)
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device (for testing)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd MovieApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Scan the QR code with Expo Go app to run on your device

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator (macOS only)
- `npm run web` - Run in web browser

## 🎨 Design

- **Dark Theme**: Modern dark gray background (#111827)
- **Purple Accent**: Primary color (#7C3AED)
- **Mobile-First**: Responsive design optimized for mobile devices
- **Consistent Icons**: Feather icons from Expo Vector Icons

## 🏗️ Project Structure

```
├── App.js                 # Main app entry point with navigation
├── global.css            # Global Tailwind styles
├── babel.config.js       # Babel configuration
├── metro.config.js       # Metro bundler configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── assets/              # Images and static assets
```

## 🔮 Future Plans

- FastAPI backend integration
- PostgreSQL database
- OpenAI API for movie suggestions
- Real authentication system
- Movie database API integration
- Advanced filtering and search
- Social features and sharing

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

This project is for educational and personal use.
