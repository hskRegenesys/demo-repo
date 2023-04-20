import { apiEndPoints } from "@/data/axisos";

class WpRestApiServices {
  constructor(private appAPIServer: any) {
    this.appAPIServer = appAPIServer;
  }

  async allPosts() {
    let result: any = {};

    try {
      const response = await this.appAPIServer.get(apiEndPoints.wpPosts);
      result = response?.data;
    } catch (err: any) {
      result = err?.response;

      console.log("Error while getting WP Posts", err.message);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  }

  async allCategories() {
    let result: any = {};

    try {
      const response = await this.appAPIServer.get(apiEndPoints.wpCategories);
      result = response?.data;
    } catch (err: any) {
      result = err?.response;

      console.log("Error while getting WP Categories", err.message);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  }
}

export default WpRestApiServices;
