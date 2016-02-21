require('file?name=index.html!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';

import GameBoard from './components/game_board/game_board'

ReactDOM.render(
  <GameBoard />,
  document.getElementById('matchnimals-app')
);
