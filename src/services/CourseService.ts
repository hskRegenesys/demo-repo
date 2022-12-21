import { apiEndPoints } from "@/data/axisos";

class CourseService {
  constructor(private appAPIServer: any) {
    this.appAPIServer = appAPIServer;
  }
  async allCourses() {
    let result: any = [];

    try {
      const response = await this.appAPIServer.get(apiEndPoints.coursesApi);
      result = response?.data;
    } catch (err: any) {
      result = err?.response;
      console.log("Error while getting student details ", err.message);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  }

  async allParentCourses() {
    let result: any = [];

    try {
      const response = await this.appAPIServer.get(
        apiEndPoints.parentCourseApi
      );
      result = response?.data;
    } catch (err: any) {
      result = [];
      console.log("Error while getting student details ", err.message);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  }
  async allcoursePrice(id: string) {
    let result: any = [];

    try {
      const response = await this.appAPIServer.get(
        `${apiEndPoints.coursePriceApi}/${id}`
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

export default CourseService;
