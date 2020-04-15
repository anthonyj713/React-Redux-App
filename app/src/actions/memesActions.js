import axios from 'axios';

export const fetchMeme = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_MEME_START'});
            axios
                .get('https://www.tronalddump.io/random/meme')
                
                .then(res => {
                    console.log('res', res.headers)
                    dispatch({ 
                        type: 'FETCH_MEME_SUCCESS', 
                        payload: res.headers});
                })
                .catch(err => console.log('err', err))
    }
}