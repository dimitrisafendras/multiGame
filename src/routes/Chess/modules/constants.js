/**
 * Created by dimitrisafendras on 4/6/17.
 */
'use strict';
import {options} from './actions';
import { emiterOptions } from './utils/emiter';

// action constants
export const NEW_GAME = 'NEW_GAME';
export const RESET_CHESS = 'RESET_CHESS';
export const SELECT_TILE = 'SELECT_TILE';
export const MOVE_TILE = 'MOVE_TILE';
export const TOGGLE_OFF = 'TOGGLE_OFF';
export const SENT_MOVE = 'SENT_MOVE';
export const CHOOSE_MODE = 'CHOOSE_MODE';
export const AM_READY = 'AM_READY';
export const SEND_CHALLENGE = 'SEND_CHALLENGE';
export const STARTING_MATCH = 'STARTING_MATCH';
export const DECLINE_MATCH = 'DECLINE_MATCH';
export const GOT_CHALLENGED = 'GOT_CHALLENGED';
export const GET_ONLINE_CHESS = 'GET_ONLINE_CHESS';
export const UPDATE_PLAYERS = 'UPDATE_PLAYERS';
export const CHOOSE_COLOR = 'CHOOSE_COLOR';

// action creators
export const newGame = options.newGame;
export const selectTile = options.selectTile;
export const moveTileOffline = options.moveTile;
export const toggleOff = options.toggleOff;
export const chooseMode = options.chooseMode;
export const resetChess = options.resetChess;
export const moveTileDummy = options.moveTileDummy;
export const iAmReadyDummy = options.iAmReadyDummy;
export const sendChallengeDummy = options.sendChallengeDummy;
export const startingMatchDummy = options.startingMatchDummy;
export const players = options.players;
export const declineMatch = options.declineMatch;
export const chooseColor = options.chooseColor;
export const updatePlayers = options.updatePlayers;
export const getOnline = options.getOnline;
export const gotChallenged = options.gotChallenged;


// event creators
export const moveTileOnline = emiterOptions.moveTileOnline;
export const getReady = emiterOptions.getReady;
export const challengePlayer = emiterOptions.challengePlayer;
export const answerChallenge = emiterOptions.answerChallenge;
export const getDisconnected = emiterOptions.getDisconnected;

//other consts
export const selectOptions = {
  moveTileOnline,
  moveTileOffline,
  selectTile,
  toggleOff,
};

export const MAX_ROWS = 8;
export const MAX_COLS = 8;
export const DEFAULT_TILE = {
  line:'',
  col: '',
};

export const NEXT_ROUND = {
  white: 'black',
  black: 'white',
};
