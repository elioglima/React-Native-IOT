import { StyleSheet, Text, View } from 'react-native';

export const backgroud = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: '#3A4',
        flexDirection: 'column',
    },
});

export const buttonPower = StyleSheet.create({
    base: {
        flex: 6,
        justifyContent: 'center',
        alignContent: "center",
        alignItems: "center",
    },
    botao: {

    },
});

export const status = StyleSheet.create({
    base: {
        flex: 2,
        justifyContent: 'center',
        alignContent: "center",
        alignItems: "center",
    },
    box: {
        width: 200,
    },
    titulo: {
        fontSize: 10,
        color: '#fff',
    },
    status: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    }
});

export const stdescritivo = StyleSheet.create({
    base: {
        flex: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: "center",
        alignItems: "center",
    },
    box: {
        width: 200,
    },
    titulo1: {
        fontSize: 15,
        color: '#000',
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    }
});