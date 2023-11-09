import {StyleSheet, Text, View, FlatList} from 'react-native';
import Answer, {AnswerType} from "./Answer";
import {useEffect, useState} from "react";


type QuestionType = {
    question: String,
    options: AnswerType[],
    answer: AnswerType,
    refresh: Function
}

export default function Question({question, options, answer, refresh}: QuestionType) {
    const [selectedAnswer, setSelectedAnswer] = useState<String>('')

    useEffect(() => {
        if(selectedAnswer) {
            setTimeout(function(){
                refresh();
            }, 2000);
        }
    }, [selectedAnswer])

    return <View style={styles.wrapper}>
        <View style={styles.question}>
            <Text style={styles.questionText}>{question}</Text>
        </View>
        <View>
            <FlatList data={options}
                      renderItem={
                          ({item}) =>
                              <Answer answer={item}
                                      selectAnswer={setSelectedAnswer}
                                      correctOption={answer}
                                      disabled={selectedAnswer !== ''}
                              />
                      }/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'column',
        // alignItems: "center",
        // alignContent: "space-around"
        justifyContent: "space-around"
    },
    question: {
        marginVertical: 3,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    questionText: {
        // textShadowColor: 'rgba(0, 0, 0, 0.9)',
        // textShadowOffset: {width: -1, height: 1},
        // textShadowRadius: 10,

        color: 'white',
        fontSize: 22,

    },
});
