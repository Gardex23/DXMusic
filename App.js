import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import TrackPlayer, { Capability } from 'react-native-track-player';

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
          ],
          compactCapabilities: [Capability.Play, Capability.Pause],
        });
        setIsPlayerReady(true);
      } catch (error) {
        console.log('Error inicializando el reproductor:', error);
      }
    }
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Iniciando motor de audio...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>¡Reproductor Listo!</Text>
      {/* Aquí irá el resto de tu interfaz, botones y listas */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});