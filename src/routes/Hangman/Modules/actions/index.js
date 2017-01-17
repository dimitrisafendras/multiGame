
export function guessLetter(letter) {
  return {
    type: 'LETTER_CHOOSEN',
    payload: {
      guess: letter
    }
  }
}


export function fetchingComplete(response) {
  return {
    type: 'FETCHING_COMPLETE',
    payload: {
      response
    }
  }
}

export function resetGame() {
  return {
    type: 'RESET_GAME'
  }
}
export function playWithFriend() {
  return {
    type: 'PLAY_WITH_FRIEND'
  }
}

export function fetchWord() {
  return function(dispatch) {
    const request = new Promise((resolve, reject) => {
      const url = '//api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=4&maxLength=11&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
      let req = new XMLHttpRequest();

      req.open('GET', url);

      req.onload = () => {
        if (req.status === 200) {
          resolve(JSON.parse(req.response));
        } else {
          reject(Error(req.statusText));
        }
      };

      req.onerror = () => {
        reject(Error('API error. Try again.'));
      };

      req.send();
    });

    request.then((response) => {
      const [ { word } ] = response;
      dispatch(checkWord(word.toLowerCase()));
    }).catch((error) => {
        console.log(error);
    });
  }
}

export function checkWord(word) {
  return function(dispatch) {
    const request = new Promise((resolve, reject) => {
      const url = `//api.wordnik.com:80/v4/words.json/search/${word}?caseSensitive=false&minCorpusCount=5&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=11&skip=0&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
`;
      let req = new XMLHttpRequest();

      req.open('GET', url);

      req.onload = () => {
        if (req.status === 200) {
          resolve(JSON.parse(req.response));
        } else {
          reject(Error(req.statusText));
        }
      };

      req.onerror = () => {
        reject(Error('API error. Try again.'));
      };

      req.send();
    });

    request.then((response) => {
      console.log(response.searchResults[0].count);
      if (response.searchResults[0].count != 0){
        dispatch(fetchingComplete(word.toLowerCase()));
        if (word.indexOf('-') != -1 && word != ''){
          dispatch(guessLetter('-'));
        }
      }
      else {
        alert(`This word doesn't exist or is not between 4-11 characters. Try again!`)
      }
      }).catch((error) => {
        console.log(error);
      });

  }
}
