import GoogleMapData from "@/data/mapData";
import Image from "next/image";
import React from "react";

const GoogleMap = () => {
  const { mapImage, locationPin, countryMapDetails } = GoogleMapData;
  return (
    <div className="google-map">
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-4">
            <h3>Our Corporate Presence</h3>
            <h4>Innovative. Innovative. Innovative.</h4>
            <p>
              Unlock your career potential with our expert career guidance
              services, designed to help you navigate the ever-evolving job
              market and achieve your professional goals. Unlock your career
              potential with our expert career guidance services, designed to
              help you navigate the ever-evolving job market and achieve your
              professional goals.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="overflow-map">
              <div className="google-map-image">
                <div className="map-image">
                  <Image
                    src={mapImage}
                    layout="intrinsic"
                    width="900"
                    height="551"
                    alt=""
                  />
                </div>

                <div className="map-marker-row-sa">
                  <div className="map-marker-sa text-center">
                    <div className="map-marker-text">
                      <Image
                        src={locationPin}
                        layout="intrinsic"
                        width="20"
                        height="32"
                        alt=""
                      />
                      <p>{countryMapDetails?.SAMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      <div className="campus-image">
                        <Image
                          src={countryMapDetails?.SAMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div>
                      <div className="campus-details">
                        <h6>
                          {countryMapDetails?.SAMapDetails?.corporateOfficeName}
                        </h6>
                        <p>{countryMapDetails?.SAMapDetails?.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-marker-row-ke">
                  <div className="map-marker-ke text-center">
                    <div className="map-marker-text">
                      <Image
                        src={locationPin}
                        layout="intrinsic"
                        width="20"
                        height="32"
                        alt=""
                      />
                      <p>{countryMapDetails?.KEMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      <div className="campus-image">
                        <Image
                          src={countryMapDetails?.KEMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div>
                      <div className="campus-details">
                        <h6>
                          {countryMapDetails?.KEMapDetails?.corporateOfficeName}
                        </h6>
                        <p>{countryMapDetails?.KEMapDetails?.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-marker-row-in">
                  <div className="map-marker-in text-center">
                    <div className="map-marker-text">
                      <Image
                        src={locationPin}
                        layout="intrinsic"
                        width="20"
                        height="32"
                        alt=""
                      />
                      <p>{countryMapDetails?.INMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      <div className="campus-image">
                        <Image
                          src={countryMapDetails?.INMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div>
                      <div className="campus-details">
                        <h6>
                          {countryMapDetails?.INMapDetails?.corporateOfficeName}
                        </h6>
                        <p>{countryMapDetails?.INMapDetails?.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-marker-row-ng">
                  <div className="map-marker-ng text-center">
                    <div className="map-marker-text">
                      <Image
                        src={locationPin}
                        layout="intrinsic"
                        width="20"
                        height="32"
                        alt=""
                      />
                      <p>{countryMapDetails?.NGMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      <div className="campus-image">
                        <Image
                          src={countryMapDetails?.NGMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div>
                      <div className="campus-details">
                        <h6>
                          {countryMapDetails?.NGMapDetails?.corporateOfficeName}
                        </h6>
                        <p>{countryMapDetails?.NGMapDetails?.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-marker-row-usa">
                  <div className="map-marker-usa text-center">
                    <div className="map-marker-text">
                      <Image
                        src={locationPin}
                        layout="intrinsic"
                        width="20"
                        height="32"
                        alt=""
                      />
                      <p>{countryMapDetails?.USAMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      <div className="campus-image">
                        <Image
                          src={countryMapDetails?.USAMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div>
                      <div className="campus-details">
                        <h6>
                          {
                            countryMapDetails?.USAMapDetails
                              ?.corporateOfficeName
                          }
                        </h6>
                        <p>{countryMapDetails?.USAMapDetails?.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
