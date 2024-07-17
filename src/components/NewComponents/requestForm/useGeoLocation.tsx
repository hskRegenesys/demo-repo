// geoLocationService.tsx

import { useEffect, useState } from "react";
import axios from "axios";

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
    throw error;
  }
};

const useGeoLocation = () => {
  const [geoLocationData, setGeoLocationData] = useState<any>({});
  const [ipAddress, setIPAddress] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((res) => {
        setIPAddress(res?.data?.ip);
      })
      .catch((error) => console.log("Error fetching IP address:", error));
  }, []);

  const fetchIpDetails = async () => {
    try {
      const details = await ipBaseService(ipAddress);
      setGeoLocationData(details.location);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchIpDetails();
  }, []);

  return { geoLocationData };
};

export default useGeoLocation;
