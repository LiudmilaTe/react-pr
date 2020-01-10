import { combineReducers } from 'redux';


const songReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'Barby Girl', duration: '2:30'},
        {title: 'We will rock you', duration: '3:45'},
        {title: 'I want it That Way', duration: '3:05'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});