import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import RNLockTask from 'react-native-lock-task';
import SystemNavigationBar from 'react-native-system-navigation-bar';


const App = () => {

  useEffect(() => {
    (async () => {
      const ltm = await RNLockTask.isAppInLockTaskMode();
      SystemNavigationBar.stickyImmersive(true);

      console.log(ltm);
    })()
  }, [])


// 
// RNLockTask.clearDeviceOwnerApp();

const handleStartLockTask = async() => {
  await RNLockTask.startLockTask();
}

const handleStartLockTaskWith = async() => {
  await RNLockTask.startLockTaskWith(["com.google.android.youtube", "com.sega.sonicdash"]);
}

const handleStopLockTask = async() => {
  await RNLockTask.stopLockTask();
}

const handleClearDeviceOwnerApp = async() => {
  await RNLockTask.clearDeviceOwnerApp();
}

  return (
    <View>
      <Text>App</Text>
      <TouchableOpacity onPress={handleStartLockTask}><Text>startLockTask</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleStartLockTaskWith}><Text>handleStartLockTaskWith</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleStopLockTask}><Text>handleStopLockTask</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleClearDeviceOwnerApp}><Text>handleClearDeviceOwnerApp</Text></TouchableOpacity>

    </View>
  )
}

export default App