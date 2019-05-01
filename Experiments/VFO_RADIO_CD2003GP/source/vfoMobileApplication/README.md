# VFO Mobile Remote Control for iPhone and Android


__This application is under construction...  Please wait...__ 

Simple Bluetooth Remote Control for the BFO. 
With this application you can control the VFO via a Smartphone iOS or Android.
    
Please copy the project to a local folder and follow the steps bellow


## Android 

### Android Studio

You have to install [Android Studio](http://developer.android.com/sdk/index.html) on your computer to compile and deploy this application on your Smartphone.


## iOS

### Xcode


### Pair your phone

You have to pair your Android phone with the HM10 Bluetooth Shield.

## Cordova 

This applications was build using the [Apache Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/index.html). 
[Apache Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/index.html) is an open-source tool to develop cross-platform mobile application. Click [here](https://cordova.apache.org/docs/en/latest/guide/overview/index.html) to see more about Apache Cordova.

### Install Cordova

    $ npm install cordova -g


### Install Platform and Plugin

    $ cordova platform add android
    $ cordova platform add ios
    $ cordova plugin add cordova-plugin-bluetooth-serial


### Build and Deploy

Compile and run the application

    $ cordova run android --device



# Useful commands    

cd Experiments/VFO_RADIO_CD2003GP/source/vfoMobileApplication/
~/Library/Android/sdk/tools/emulator -list-avds
~/Library/Android/sdk/tools/emulator -avd Nexus_6P_API_25 &

