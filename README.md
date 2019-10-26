# IOT - REACT NATIVE

### Internet of Things - Light Off/On

    Este projeto é destinado ao aprendiasado das funcionabilidades disponiveis para visual do react native.

    pakages: REDUX, REDUX-SAGA, REDUCER
    sistemas: WINDOWS 10, MAC-OS

    Pontos abordado:

# Ambiente de execução:

    - IOS
    - Android

# Comandos utilizados

    create-react-native-app nomedoapp
    react-native upgrade
    react-native run-android

# Problemas de instalação e Soluções

    reopen android studio as admin. build the gradle. if no issue, proceed on
    access the android folder of your app. i.e c:\folder\app\android
    type in gradlew clean
    run react-native run-android

    macos
    * criar em /android/local.properties
    * /Users/elio.lima/Library/Android/sdk

    1-> Go to your React-native Project -> Android
    2-> Create a file local.properties
    3-> Open the file
    4-> paste your Android SDK path like below

    5-> in Windows sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
    5-> in macOS sdk.dir = /Users/USERNAME/Library/Android/sdk
    5-> in linux sdk.dir = /home/USERNAME/Android/Sdk
    obs: Replace USERNAME with your user name

    7-> Now, Run the react-native run-android in your terminal.

# Sobre o IOT

    1) git clone https://github.com/elioglima/IOT.git
    2) yarn - necessario para instalar os pacotes
    3) react-native run-android ou yarn android - para executar no emulador

# Estilização

é necessário instalar o plugin de viewport para trabalhar dentro do StyleSheet

        1) npm install react-native-viewport-units --save

        var styles = StyleSheet.create({
        lookingGood: {
            width: 15*vmin,
            height: 10*vmax,
            padding: 2*vw,
            margin: 4*vh,
        }
        });

# Packages

        yarn add react-navigation
        yarn add react-native-gesture-handler
        react-native link react-native-gesture-handler

        npm install redux react-redux connected-react-router react-router
        yarn add redux react-redux connected-react-router react-router
