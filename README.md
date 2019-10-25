# IOT - REACT NATIVE

### Internet of Things - Light Off/On

    Este projeto é destinado ao aprendiasado das funcionabilidades disponiveis para visual do react native.

    Pontos abordado:

# Ambiente de execução:

    - IOS
    - Android

# Comandos utilizados

    create-react-native-app nomedoapp
    react-native upgrade
    react-native run-android

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
