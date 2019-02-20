import { combineReducers } from "redux";

//Reducers
const SongsReducer = () => {
  return [
    { title: "Smoke on the Water", duration: "4:40" },
    { title: "Space Oddity", duration: "5:04" },
    { title: "Dance of the Death", duration: "8:40" }
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: SongsReducer,
  selectedSong: SelectedSongReducer
});
