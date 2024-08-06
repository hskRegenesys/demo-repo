import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, handleSetCookie } from "src/utils/cookieutils";

const API_KEY = process.env.base_key;
const BASE_URL = process.env.base_api_url;

export const ipBaseService = async (ip: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/info`, {
      params: {
        apikey: API_KEY,
        ip: ip,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching IP details:", error);
    return null; // Return null to indicate failure
  }
};

const useGeoLocation = (): { country?: any; city?: any } => {
  const [geoLocationData, setGeoLocationData] = useState<{
    country?: any;
    city?: any;
  }>({});
  const [ipAddress, setIPAddress] = useState<string>("");
  const [cookiesChecked, setCookiesChecked] = useState<boolean>(false);

  useEffect(() => {
    const cookieCountry = getCookie("country");
    const cookieCity = getCookie("city");

    if (cookieCountry && cookieCity) {
      console.log("Cookies are available");
      setGeoLocationData({ country: cookieCountry, city: cookieCity });
      setCookiesChecked(true);
    } else {
      console.log("Cookies not found, making API call");
      axios
        .get("https://api.ipify.org?format=json")
        .then((res) => {
          setIPAddress(res?.data?.ip);
        })
        .catch((error) => console.log("Error fetching IP address:", error));
    }
  }, []);

  const fetchIpDetails = async () => {
    const details = await ipBaseService(ipAddress);
    const country = details?.location?.country?.alpha2;
    const city = details?.location?.city?.name;

    // Default values if API fails or data is not present
    const finalCountry = country || "ZA";
    const finalCity = city || "null";

    setGeoLocationData({ country: finalCountry, city: finalCity });

    // Set cookies
    handleSetCookie("country", finalCountry);
    handleSetCookie("city", finalCity);
  };

  useEffect(() => {
    if (ipAddress && !cookiesChecked) {
      fetchIpDetails().then(() => setCookiesChecked(true));
    }
  }, [ipAddress, cookiesChecked]);

  return geoLocationData;
};

export default useGeoLocation;
