import {StyleSheet, Text, View} from 'react-native';

export default function Playlist({text}: { text: String }) {
    return <View style={styles.playlist}>
        <Text style={styles.playlistText}>Playlist : {text}</Text>
        <Text style={{...styles.playlistText, fontSize: 22}}>></Text>
    </View>
}

const styles = StyleSheet.create({
    playlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#222',
    },
    playlistText: {
        color: 'white',
        fontSize: 14,
        fontWeight: "bold"
    }
});
