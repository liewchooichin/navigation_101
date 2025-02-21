# My Notes

# Screenshots

## Horoscope

![horoscope buttons](./screenshots/Horoscope1.jpg)
![horoscope prediction](./screenshots/Horoscope2.jpg)

## Predictions
![quotes](./screenshots/Quotes1.jpg)


# Templates

This template is created from the following:

```
npx create-expo-app@latest --template react-navigation/template
```

[Horoscope API](https://horoscope-app-api.vercel.app/)

```
curl -X 'GET' \
  'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=Virgo&day=TODAY' \
  -H 'accept: application/json'
```

```

```
https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=Virgo&day=TODAY
```
	
Response body
Download
{
  "data": {
    "date": "Feb 11, 2025",
    "horoscope_data": "If you don't understand something, ask, Virgo. If it looks different to you, ask why that is. Your curiosity is high, especially when it comes to the unconventional, and even more if it's revolutionary. The rebel in you will feel new purpose, and you may be tempted to throw a stick in the spokes of an old carriage that continues to head down the same old boring path."
  },
  "status": 200,
  "success": true
}
```

Order of the zodiac buttons according to the following:

- The sequence of Western zodiac signs is: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. 



# Starter Template with React Navigation

This is a minimal starter template for React Native apps using Expo and React Navigation.

It includes the following:

- Example [Native Stack](https://reactnavigation.org/docs/native-stack-navigator) with a nested [Bottom Tab](https://reactnavigation.org/docs/bottom-tab-navigator)
- Web support with [React Native for Web](https://necolas.github.io/react-native-web/)
- TypeScript support and configured for React Navigation
- Automatic deep link and URL handling configuration
- Expo [Development Build](https://docs.expo.dev/develop/development-builds/introduction/) with [Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)
- Edge-to-edge configured on Android with [`react-native-edge-to-edge`](https://www.npmjs.com/package/react-native-edge-to-edge)

## Getting Started

1. Create a new project using this template:

   ```sh
   npx create-expo-app@latest --template react-navigation/template
   ```

2. Edit the `app.json` file to configure the `name`, `slug`, `scheme` and bundle identifiers (`ios.bundleIdentifier` and `android.bundleIdentifier`) for your app.

3. Edit the `src/App.tsx` file to start working on your app.

## Running the app

- Install the dependencies:

  ```sh
  npm install
  ```

- Start the development server:

  ```sh
  npm start
  ```

- Build and run iOS and Android development builds:

  ```sh
  npm run ios
  # or
  npm run android
  ```

- In the terminal running the development server, press `i` to open the iOS simulator, `a` to open the Android device or emulator, or `w` to open the web browser.

## Notes

This project uses a [development build](https://docs.expo.dev/develop/development-builds/introduction/) and cannot be run with [Expo Go](https://expo.dev/go). To run the app with Expo Go, edit the `package.json` file, remove the `expo-dev-client` package and `--dev-client` flag from the `start` script. However, Edge-to-edge won't work on Expo Go.

We highly recommend using the development builds for normal development and testing.

The `ios` and `android` folder are gitignored in the project by default as they are automatically generated during the build process ([Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)). This means that you should not edit these folders directly and use [config plugins](https://docs.expo.dev/config-plugins/) instead. However, if you need to edit these folders, you can remove them from the `.gitignore` file so that they are tracked by git.

## Resources

- [React Navigation documentation](https://reactnavigation.org/)
- [Expo documentation](https://docs.expo.dev/)

---

Demo assets are from [lucide.dev](https://lucide.dev/)
