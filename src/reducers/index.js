import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Smells Like Teen Spirit",
      duration: "3:35"
    },
    {
      title: "Steal My Sunshine",
      duration: "3:50"
    },
    {
      title: "All Star",
      duration: "4:33"
    },
    {
      title: "I Want It That Way",
      duration: "4:40"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
