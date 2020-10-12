import React from "react";
import MapView, { Marker } from "react-native-maps";
export default function Map({ position, markers }) {
  return (
    <MapView
      initialRegion={{
        latitude: position.latitude,
        longitude: position.longitude,
        longitudeDelta: 0.3,
        latitudeDelta: 0.3,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      minZoomLevel={10}
    >
      {markers.map((marker) => (
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.message}
        />
      ))}
    </MapView>
  );
}