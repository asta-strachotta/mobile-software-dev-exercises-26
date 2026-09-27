import Counter from "./src/components/Counter";

//TODO: follow steps for setting up your environment:
// https://docs.expo.dev/develop/unit-testing/#structure-your-tests
//for windows: npx expo install jest-expo jest @types/jest "--" --dev
//for mac/linux: npx expo install jest-expo jest @types/jest --dev

//go to tsconfig.json and follow the todo
//add the following to package.json:
// "scripts": {
//     ...
//     "test": "jest --watchAll"
//   },
//   "jest": {
//     "preset": "jest-expo"
//     "transformIgnorePatterns": [
//        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)"
//     ]
//   }
//
//import react native testing library:
//for windows: npx expo install @testing-library/react-native "--" --dev
//for mac/linux: npx expo install @testing-library/react-native --dev

//TODO: Create a folder named __tests__ and create a new file inside the folder called Counter.test.tsx
// inside Counter.test.tsx:
// import the Counter component
// import render and fireEvent from @testing-library/react-native
// follow the structure from slides to test the functionality of
// initalCount, increment, decrement, reset and switchSign
// you can add multiple tests inside the same describe-block



export default function App() {
  return (
      <Counter initialCount={0}/>
  )
}
