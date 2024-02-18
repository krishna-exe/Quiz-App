import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

const Quiz = ({navigation, route}) => {
  const {mainBody, question, options, footer} = styles;

  //Hook Questions from API
  const [questions, setQuestions] = useState();

  //Hook for question Index
  const [ques, setQues] = useState(0);

  //Hook for options
  const [option, setOption] = useState([]);

  //Hook for counting score
  const [score, setScore] = useState(0);

  let Category = '';
  let Name = '';

  //for choosing input category and difficulty
  switch (route.params.Category) {
    case 'General Knowledge':
      Category = '9';
      Name = 'General Knowledge';
      break;
    case 'Movies':
      Category = '11';
      Name = 'Movies';
      break;
    case 'Books':
      Category = '10';
      Name = 'Books';
      break;
    case 'Music':
      Category = '12';
      Name = 'Music';
      break;
    case 'Musicals and Theaters':
      Category = '13';
      Name = 'Musicals and Theaters';
      break;
    case 'Television':
      Category = '14';
      Name = 'Television';
      break;
    case 'Video Games':
      Category = '15';
      Name = 'Video Games';
      break;
    case 'Board Games':
      Category = '16';
      Name = 'Board Games';
      break;
    case 'Science & Nature':
      Category = '17';
      Name = 'Science & Nature';
      break;
    case 'Computer Science':
      Category = '18';
      Name = 'Computer Science';
      break;
    case 'Mathematics':
      Category = '19';
      Name = 'Mathematics';
      break;
    case 'Mythology':
      Category = '20';
      Name = 'Mythology';
      break;
    case 'Sports':
      Category = '21';
      Name = 'Sports';
      break;
    case 'Geography':
      Category = '22';
      Name = 'Geography';
      break;
    case 'History':
      Category = '23';
      Name = 'History';
      break;
    case 'Politics':
      Category = '24';
      Name = 'Politics';
      break;
    case 'Art':
      Category = '25';
      Name = 'Art';
      break;
    case 'Celebreties':
      Category = '26';
      Name = 'Celebreties';
      break;
    case 'Animals':
      Category = '27';
      Name = 'Animals';
      break;
    case 'Vehicles':
      Category = '28';
      Name = 'Vehicles';
      break;
    case 'Comics':
      Category = '29';
      Name = 'Comics';
      break;
    case 'Gadgets':
      Category = '30';
      Name = 'Gadgets';
      break;
    case 'Japanese Anime':
      Category = '31';
      Name = 'Japanese Anime';
      break;
    case 'Cartoon and Animations':
      Category = '32';
      Name = 'Cartoon and Animations';
      break;

    case 'Any Category':
      Category = '0';
      Name = 'Any Category';
      break;
  }
  Difficulty = route.params.Difficulty;
  Difficulty = Difficulty.toLowerCase();
  Level = route.params.Difficulty;

  //Fetching API according to dynamic input
  const getQuiz = async () => {
    if (Category != '0' && Difficulty != '')
      var url =
        'https://opentdb.com/api.php?amount=10&category=' +
        Category +
        '&difficulty=' +
        Difficulty +
        '&type=multiple&encode=url3986';
    else if (Category == '0' && Difficulty != '')
      var url =
        'https://opentdb.com/api.php?amount=10&difficulty=' +
        Difficulty +
        '&type=multiple&encode=url3986';
    else if (Category != '0' && Difficulty == '')
      var url =
        'https://opentdb.com/api.php?amount=10&category=' +
        Category +
        '&type=multiple&encode=url3986';
    else
      var url =
        'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';

    const res = await fetch(url);
    const data = await res.json(url);
    setQuestions(data.results);
    setOption(generateOptionsAndShuffle(data.results[0]));
  };

  useEffect(() => {
    getQuiz();
  }, []);

  //Funtion for Skip button
  const handleSkipPress = () => {
    setQues(ques + 1);
    setOption(generateOptionsAndShuffle(questions[ques + 1]));
  };

  //Function of an algorithm for shuffling the options
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  //generating shuffled options
  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);

    shuffleArray(options);

    return options;
  };

  //Function to evaluate the selected option
  const handleSelectedOption = _option => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
      console.log(score);
    }
    console.log(_option === questions[ques].correct_answer);
    console.log(questions[ques].correct_answer);
    if (ques !== 9) {
      setQues(ques + 1);
      setOption(generateOptionsAndShuffle(questions[ques + 1]));
    }
    if (ques === 9) {
      handleShowResult();
    }
  };

  //Function for the Show Result button
  const handleShowResult = () => {
    navigation.navigate('Final', {
      score: score,
    });
  };

  //Quiz Screen starts
  return (
    //Heading
    <View style={styles.mainBody}>
      {questions && (
        <View style={styles.parent}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 40,
              marginTop: 0,
            }}>
            Questions
          </Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 20, width: '50%'}}>Category: {Name}</Text>
            <Text style={{fontSize: 20, width: '50%'}}>
              {'      '}
              Difficulty: {Level}
            </Text>
          </View>

          {/* Fetching questions from API */}
          <View style={styles.question}>
            <Text style={styles.questText}>
              Q. {decodeURIComponent(questions[ques].question)}
            </Text>
          </View>

          {/* Mapping shuffled options from API */}
          <View style={styles.options}>
            <TouchableOpacity
              onPress={() => handleSelectedOption(option[0])}
              style={styles.optionButton}>
              <Text style={styles.optText}>
                {decodeURIComponent(option[0])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSelectedOption(option[1])}
              style={styles.optionButton}>
              <Text style={styles.optText}>
                {decodeURIComponent(option[1])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSelectedOption(option)}
              style={styles.optionButton}>
              <Text style={styles.optText}>
                {decodeURIComponent(option[2])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSelectedOption(option[3])}
              style={styles.optionButton}>
              <Text style={styles.optText}>
                {decodeURIComponent(option[3])}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.Invisiblebutton}>
              <Text style={{color: 'black'}}></Text>
            </TouchableOpacity>

            {ques !== 9 && (
              <TouchableOpacity
                style={styles.skipButton}
                onPress={handleSkipPress}>
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>
            )}

            {ques == 9 && (
              <TouchableOpacity
                onPress={handleShowResult}
                style={styles.Showbutton}>
                <Text style={styles.buttonText}>Show Results</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  mainBody: {
    padding: 12,
    height: '100%',
    backgroundColor: '#00132D',
  },

  question: {
    marginVertical: 16,
    backgroundColor: '#edf6f9',
    borderRadius: 10,
    padding: 10,
  },

  questText: {
    fontSize: 26,
    color: 'black',
  },

  optionButton: {
    marginVertical: 6,
    backgroundColor: '#4361ee',

    borderWidth: 4,
    padding: 19,
    borderRadius: 12,
  },

  optText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },

  options: {
    marginVertical: 16,
    flex: 1,
    color: 'black',
  },

  skipButton: {
    borderColor: 'black',
    borderRadius: 16,
    width: '30%',
    backgroundColor: '#ba181b',
    padding: 16,
    alignItems: 'center',
    alignSelf: 'center',
  },

  Showbutton: {
    borderColor: 'black',
    borderRadius: 16,
    width: '50%',
    backgroundColor: '#007f5f',
    padding: 16,
    alignItems: 'center',
    alignSelf: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 22,
  },

  footer: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  parent: {
    height: '100%',
  },
});
