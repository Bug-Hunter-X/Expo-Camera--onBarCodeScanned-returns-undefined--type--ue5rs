```javascript
import * as React from 'react';
import { Camera, BarCodeScanner } from 'expo-camera';
import { useState, useEffect } from 'react';

function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcodeData({type, data});
  };

  if (hasPermission === null) {
    return <View />; //show loading screen
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      {scanned && (
        <View>
          <Text>Barcode Type : {barcodeData?.type}</Text> {/* Handle undefined type */}
          <Text>Barcode Data : {barcodeData?.data}</Text> {/* Handle undefined data */}
        </View>
      )}
    </View>
  );
}
```