import { apiEndPoints } from "@/data/axisos";

interface IParameters {
  search?: string;
  orderby?: string;
  per_page?: number;
  page?: number;
  categories?: number;
}

class WpRestApiServices {
  constructor(private appAPIServer: any) {
    this.appAPIServer = appAPIServer;
  }

  async allPosts(params?: IParameters) {
    let result: any = {};
    let endUrlName = `${apiEndPoints.wpPosts}?per_page=${params?.per_page}`;
    if (params?.page) endUrlName = `${endUrlName}&&page=${params?.page}`;
    if (params?.search) endUrlName = `${endUrlName}&&search=${params?.search}`;
    if (params?.categories)
      endUrlName = `${endUrlName}&&categories=${params?.categories}`;
    if (params?.orderby)
      endUrlName = `${endUrlName}&&orderby=${params?.orderby}`;

    try {
      const response = await this.appAPIServer.get(endUrlName);
      result = response?.data;
    } catch (err: any) {
      result = err?.response;

      console.log("Error while getting WP Posts", err.message);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  }

  async allCategories(params?: IParameters) {
    let result: any = {};
    let endUrlName = `${apiEndPoints.wpCategories}?per_page=${params?.per_page}`;
    if (params?.page) endUrlName = `${endUrlName}&&page=${params?.page}`;
    if (params?.search) endUrlName = `${endUrlName}&&search=${params?.search}`;
    if (params?.orderby)
      endUrlName = `${endUrlName}&&orderby=${params?.orderby}`;

    try {
      const response = await this.appAPIServer.get(endUrlName);
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
