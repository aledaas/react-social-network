import { LanguageType } from 'reducers/locale/langugeType'

export const environment = {
  firebase: {
      apiKey: 'AIzaSyCux_pGGJGR36PkN6TFwJ3A6nSCDYSMWPA',
      authDomain: 'loginresto-7297b.firebaseapp.com',
      databaseURL: 'https://loginresto-7297b.firebaseio.com',
      projectId: 'loginresto-7297b',
      storageBucket: 'loginresto-7297b.appspot.com',
      messagingSenderId: '949088389513'
  },
  settings: {
    appName: 'Green',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/loginresto-7297b.appspot.com/o/fondo.JPG?alt=media&token=78a762dc-4668-4587-b18e-d02f8d4906d3',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
