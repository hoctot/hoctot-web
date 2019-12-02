export const storeState = {
  isLogin: 'isLogin',
  user: 'user',
  isLoading: 'isLoading',
  listCollection: 'listCollection',
  listQuestion: 'listQuestion',
  listRoom: 'listRoom',
  room: 'room',
}

export const storeGetter = {
  roomListUser: 'roomListUser',
}

export const storeActions = {
  checkLogin: 'checkLogin',
  login: 'login',
  signOut: 'signOut',
  bindListCollection: 'bindListCollection',
  bindListQuestion: 'bindListQuestion',
  bindListRoom: 'bindListRoom',
  createRoom: 'createRoom',
  enterRoom: 'enterRoom',
  exitRoom: 'exitRoom',
  deleteRoom: 'deleteRoom',
  updateRoom: 'updateRoom',
  setRoomData: 'setRoomData',
  checkInRoom: 'checkInRoom',
}

export const storeMutations = {
  SET_LOGIN: 'SET_LOGIN',
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  SET_ROOM: 'SET_ROOM',
}

export const routerName = {
  home: 'home',
  about: 'about',
  profile: 'profile',
  play: 'play',
  room: 'room',
  roomWait: 'roomWait',
  editor: 'editor',
  collections: 'collections',
  collectionData: 'collectionData',
  collectionEditor: 'collectionEditor',
  collectionEditorId: 'collectionEditorId',
}

export const dataRef = {
  collections: {
    root: 'collections',
    data: 'data',
  },
  questions: {
    root: 'questions',
    data: 'data',
  },
  rooms: {
    root: 'rooms',
  },
}

export const roomType = {
  basic: 'basic',
}

export const roomStatus = {
  wait: 'wait',
  playing: 'playing',
}

export const dataPrefix = {
  user: 'User_',
}

export const dataSample = {
  listColor: [
    '3f51b5',
    '673ab7',
    'e91e63',
    'ffc107',
    '03a9f4',
    '00bcd4',
    '009688',
    '795548',
    '607d8b',
    'f44336',
    'ffc107',
  ],
  listColorHex: [
    '#3f51b5',
    '#673ab7',
    '#e91e63',
    '#ffc107',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4CAF50',
    '#795548',
    '#f44336',
    '#FF5722',
    '#607d8b',
    '#000',
    '#fff',
  ],
}
