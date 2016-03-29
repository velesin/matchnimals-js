require('file?name=index.html!./index.html');

import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { GameBoard } from './components/game_board/game_board';

render(<GameBoard />, document.getElementById('matchnimals-app'));
