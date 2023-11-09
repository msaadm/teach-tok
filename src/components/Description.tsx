import {StyleSheet, Text, View} from 'react-native';

export default function Description({name, description}: { name: String, description: String }) {
    return <View style={styles.wrapper}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    nameText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    descriptionText: {
        color: 'white',
        fontSize: 14,
    }
});
