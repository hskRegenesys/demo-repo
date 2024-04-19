import GoogleMapData from "@/data/mapData";
import Image from "next/image";
import React from "react";

const GoogleMap = () => {
  const { mapImage, locationPin, countryMapDetails } = GoogleMapData;
  return (
    <div className="google-map">
      <div className="container">
        <div className="row align-items-center mt-4">
          <div className="col-lg-4">
            <h3>CORPORATE PRESENCE</h3>
            <h4>Innovative. Transformative. Trailblazing.</h4>
            <p>
              Digital Regenesys is a leading ed-tech platform that offers a wide
              array of upskilling courses designed to empower individuals and
              organisations with the latest industry-relevant skills. With its
              headquarters situated in Silicon Valley, the world's technological
              hub, Digital Regenesys operates globally, including a strong
              presence in South Africa, Nigeria, Kenya, India, Croatia and
              beyond. Our mission is to bridge the skills gap and drive economic
              growth by providing learners with access to high-quality,
              cutting-edge education. Whether it's in the field of technology,
              business, or creative disciplines, Digital Regenesys offers
              comprehensive Courses that cater to diverse learning needs.
              Through our global presence, we strive to empower learners from
              different regions to thrive in their respective professional
              landscapes, contribute to innovation, and shape the future of
              work.
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
                        width="15"
                        height="24"
                        alt=""
                      />
                      <p>{countryMapDetails?.SAMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      {/* <div className="campus-image">
                        <Image
                          src={countryMapDetails?.SAMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div> */}
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
                        width="15"
                        height="24"
                        alt=""
                      />
                      <p>{countryMapDetails?.KEMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      {/* <div className="campus-image">
                        <Image
                          src={countryMapDetails?.KEMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div> */}
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
                        width="15"
                        height="24"
                        alt=""
                      />
                      <p>{countryMapDetails?.INMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      {/* <div className="campus-image">
                        <Image
                          src={countryMapDetails?.INMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div> */}
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
                        width="15"
                        height="24"
                        alt=""
                      />
                      <p>{countryMapDetails?.NGMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      {/* <div className="campus-image">
                        <Image
                          src={countryMapDetails?.NGMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div> */}
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
                        width="15"
                        height="24"
                        alt=""
                      />
                      <p>{countryMapDetails?.USAMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      {/* <div className="campus-image">
                        <Image
                          src={countryMapDetails?.USAMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div> */}
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
                <div className="map-marker-row-kro">
                  <div className="map-marker-kro text-center">
                    <div className="map-marker-text">
                      <Image
                        src={locationPin}
                        layout="intrinsic"
                        width="15"
                        height="24"
                        alt=""
                      />
                      <p>{countryMapDetails?.KROMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      {/* <div className="campus-image">
                        <Image
                          src={countryMapDetails?.KROMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div> */}
                      <div className="campus-details">
                        <h6>
                          {
                            countryMapDetails?.KROMapDetails
                              ?.corporateOfficeName
                          }
                        </h6>
                        <p>{countryMapDetails?.KROMapDetails?.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-marker-row-tz">
                  <div className="map-marker-kro text-center">
                    <div className="map-marker-text">
                      <Image
                        src={locationPin}
                        layout="intrinsic"
                        width="15"
                        height="24"
                        alt=""
                      />
                      <p>{countryMapDetails?.TZMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      {/* <div className="campus-image">
                        <Image
                          src={countryMapDetails?.TZMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div> */}
                      <div className="campus-details">
                        <h6>
                          {countryMapDetails?.TZMapDetails?.corporateOfficeName}
                        </h6>
                        <p>{countryMapDetails?.TZMapDetails?.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="map-marker-row-ug">
                  <div className="map-marker-kro text-center">
                    <div className="map-marker-text">
                      <Image
                        src={locationPin}
                        layout="intrinsic"
                        width="15"
                        height="24"
                        alt=""
                      />
                      <p>{countryMapDetails?.UGMapDetails?.countryName}</p>
                    </div>
                    <div className="hover-details">
                      {/* <div className="campus-image">
                        <Image
                          src={countryMapDetails?.TZMapDetails?.campusImage}
                          layout="intrinsic"
                          width="280"
                          height="300"
                          objectFit="cover"
                          alt=""
                        />
                      </div> */}
                      <div className="campus-details">
                        <h6>
                          {countryMapDetails?.UGMapDetails?.corporateOfficeName}
                        </h6>
                        <p>{countryMapDetails?.UGMapDetails?.address}</p>
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
