import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export type AnswerType = { id: String, answer: String };

export default function Answer({answer, selectAnswer, correctOption, disabled}:
                                   {
                                       answer: AnswerType,
                                       correctOption: AnswerType,
                                       disabled: boolean,
                                       selectAnswer: Function
                                   }) {
    const [backgroundColor, setBackgroundColor] = useState('rgba(255,255,255,0.5)')

    const handleAnswerSelection = () => {
        selectAnswer(answer.id);

        if (answer.id === correctOption.id) {
            setBackgroundColor('rgba(41,119,41,0.5)');
        } else {
            setBackgroundColor('rgba(80,26,26,0.5)');
        }
    }

    return <TouchableOpacity onPress={handleAnswerSelection} disabled={disabled}>
        <View style={{...styles.answer, backgroundColor: backgroundColor}}>
            <Text style={styles.answerText}>{answer.answer}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    answer: {
        marginVertical: 3,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 5
    },
    answerText: {
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        color: 'white',
        fontSize: 18,
    }
});
