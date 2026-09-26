import { registerRootComponent } from 'expo';
import TrackPlayer from 'react-native-track-player';
import App from './App';
import { playbackService } from './service';

// Registra la interfaz gráfica
registerRootComponent(App);

// Registra el cerebro en segundo plano (controles de pantalla de bloqueo)
TrackPlayer.registerPlaybackService(() => playbackService);