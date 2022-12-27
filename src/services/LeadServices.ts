import { apiEndPoints } from "@/data/axisos";

class LeadService {
  static allCourses: any;
  constructor(private appAPIServer: any) {
    this.appAPIServer = appAPIServer;
  }

  async saveLead(params: any) {
    let result: any = [];
    try {
      const response = await this.appAPIServer.post(
        apiEndPoints.leadApi,
        params
      );
      result = response?.data;
    } catch (err: any) {
      result = err?.response;
      console.log("Error while getting student details ", err.message);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  }
}

export default LeadService;
