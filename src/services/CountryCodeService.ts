import { apiEndPoints } from "@/data/axisos";

class CountryCodeService {
  constructor(private appAPIServer: any) {
    this.appAPIServer = appAPIServer;
  }
  async countryDetails() {
    let result: any = {};

    try {
      const response = await this.appAPIServer.get(apiEndPoints.countryCode);
      result = response?.data;
    } catch (err: any) {
      result = err?.response;

      console.log("Error while getting Country details ", err.message);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  }
}

export default CountryCodeService;
