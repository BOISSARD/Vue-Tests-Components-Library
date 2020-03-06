# Vue-Tests-Components-Library

## Repository goal

Repository with different vuejs components library project to test them separately.

See in branches to get the library test you want

## Projects setup
For each sub-project/library test follow the commands

### Link the model 
To use the model classes, you need to link from the directory **model** to the correct project.

#### In Windows 
Start the windows command prompt as administrator and execute in the *src* of the test :
```
mklink /J model ..\..\model
```

### Install packages 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Setup on mobile

### Installation and configuration of **Capacitor**

Initialize capacitor
```
npx cap init
```

Add for the OS you want between `android` `ios` `electron`, with the command :
```
npx cap add android
```

### Update 

First compile and minify with
```
npm run build
```

Then copy the build in each os build
```
npx cap copy
```

### Launch on Android

to start the application on your android smartphone, first launch on Android Studio
```
npx cap open android
```

Then just let it build in Android Studio and when it's finish start with the run command an it will install on your phone.
