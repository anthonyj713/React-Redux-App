import axios from 'axios';

export const fetchMeme = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_MEME_START'});
            axios
                .get('https://www.tronalddump.io/random/quote')
                .then(res => {
                    console.log('res', res.data.value)
                    dispatch({ 
                        type: 'FETCH_MEME_SUCCESS', 
                        payload: res.data.value});
                })
                .catch(err => console.log('err', err))
    }
}