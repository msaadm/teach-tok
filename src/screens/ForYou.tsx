import {SafeAreaView, ImageBackground, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {useEffect, useState} from "react";
import TeachTokAPI from "../api/TeachTokAPI";
import Question
    from "../components/Question";
import Description from "../components/Description";
import Playlist from "../components/Playlist";

type QuestionResponse = {
    "type": String,
    "id": Number,
    "playlist": String,
    "description": String,
    "image": String,
    "question": String,
    "options": { id: String, answer: String }[],
    "user": {
        "name": String,
        "avatar": String
    }
}

export default function ForYou() {
    const [questionResponse, setQuestionResponse] = useState<QuestionResponse>(null);
    const [correctOption, setCorrectOption] = useState({correct_options: [{}]});
    const [reload, setReload] = useState(false);

    const loadNextQuestion = () => {
        setReload(reload => !reload);
    }
    const getQuestionAndAnswerFromAPI = async () => {
        setQuestionResponse(null);
        try {
            const api = new TeachTokAPI();
            let response = await api.getForYou();
            setQuestionResponse(response);

            response = await api.getCorrectAnswer(response.id);
            setCorrectOption(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getQuestionAndAnswerFromAPI();
    }, [reload])

    return (
        <SafeAreaView style={styles.container}>
            {questionResponse && correctOption ?
                <ImageBackground
                    style={styles.imageBackground}
                    source={{
                        uri: questionResponse?.image,
                    }}>
                    <View style={styles.header}>
                        <Text></Text>
                        <Text style={styles.heading}>For You</Text>
                        <Text></Text>
                    </View>
                    <Question question={questionResponse?.question}
                              options={questionResponse?.options}
                              answer={correctOption?.correct_options[0]}
                              refresh={loadNextQuestion}
                    />
                    <Description description={questionResponse?.description} name={questionResponse?.user?.name}/>
                    <Playlist text={questionResponse?.playlist}/>
                </ImageBackground>
                : <ActivityIndicator  size="large" color="#0000ff" />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60
    },
    heading: {
        borderBottomColor: "white",
        borderBottomWidth: 3,
        marginBottom: 3,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
});
