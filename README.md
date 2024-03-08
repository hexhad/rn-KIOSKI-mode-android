# KIOSK mode | Lock Task Mode | Single Task Mode | Android | POS
## Getting Start

#### created with `react-native-lock-task` and for the immersive mode `react-native-system-navigation-bar`
```bash
yarn add react-native-lock-task
yarn add react-native-system-navigation-bar
```

#### setup environment 
1. Install `node_modules` and start
```bash
yarn install
yarn start
```
2. ❗ Delete all accounts from the device
   
    1. Go to the Settings of the Device
    2. Then Accounts
    3. Then Delete All accounts appeared there
  
3. Set device Owner
`adb shell dpm set-device-owner <PACKAGE_NAME THAT STARTS WITH com.>/com.rnlocktask.MyAdmin`
```bash
adb shell dpm set-device-owner com.lockmeasalauncher/com.rnlocktask.MyAdmin
```
### Useful Links
* [Android Immersive](https://developer.android.com/develop/ui/views/layout/immersive?authuser=1)
* [react-native-lock-task](https://github.com/temaivanoff/react-native-lock-task)
* [react-native-system-navigation-bar](https://www.npmjs.com/package/react-native-system-navigation-bar)
* [lock-task-mode](https://developer.android.com/work/dpc/dedicated-devices/lock-task-mode)
* [Native Modules](https://reactnative.dev/docs/native-modules-android)


### Additional
```bash
adb shell dpm set-active-admin --user current com.lockmeasalauncher/com.rnlocktask.MyAdmin
```

```bash
pod install --repo-update
```
