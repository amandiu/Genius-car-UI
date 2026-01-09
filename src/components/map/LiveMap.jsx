import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "16px",
};

const defaultCenter = {
    lat: 23.8103,
    lng: 90.4125 // example (Delhi)
};

const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
        { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }],
        },
    ],
};

const LiveMap = ({ markers = [] }) => {
    const [activeMarker, setActiveMarker] = useState(null);

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={13}
            options={mapOptions}
        >
            {markers.map((m) => (
                <Marker
                    key={m.id}
                    position={m.position}
                    onClick={() => setActiveMarker(m)}
                />
            ))}

            {activeMarker && (
                <InfoWindow
                    position={activeMarker.position}
                    onCloseClick={() => setActiveMarker(null)}
                >
                    <div className="text-sm">
                        <p className="font-semibold">{activeMarker.name}</p>
                        <p className="text-gray-500">{activeMarker.status}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
};

export default LiveMap;
