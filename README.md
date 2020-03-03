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
