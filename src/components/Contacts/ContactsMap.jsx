import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import geoIcon from "../../assets/img/icons/geo-big.svg";

const coordinate = [53.037782, 158.658541];
const zoom = 16;
const mapData = {
  center: [53.037782, 158.658541],
  zoom,
  controls: ["zoomControl", "fullscreenControl"],
};

const ContactsMap = () => {
  return (
    <div className="contacts__map">
      <YMaps>
        <Map
          className="contacts__map-object"
          defaultState={mapData}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            geometry={coordinate}
            options={{
              iconLayout: `default#image`,
              iconImageHref: geoIcon,
              iconImageSize: [50, 50],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default ContactsMap;
