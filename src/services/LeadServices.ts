// import { leadSource } from "@/components/config/constant";
import { apiEndPoints } from "@/data/axisos";

class LeadService {
  static allCourses: any;
  salesforceProgramOfIngterest = new Map([
    ["Cybersecurity", "Cyber Security"],
    ["Data Science", "Data Science"],
    ["Digital Marketing", "Digital Marketing"],
    ["Project Management", "Project Management"],
  ]);
  drLeadRecordTypeId = "0127Q000000NDbXQAW";
  constructor(private leadServer: any, private salesforceServer: any) {
    this.leadServer = leadServer;
    this.salesforceServer = salesforceServer;
  }

  async saveLead(params: any) {
    let result: any = [];
    try {
      //Save leads on Salesforce
      let salesforceParam = { ...params };
      salesforceParam.Interested_Topic = this.salesforceProgramOfIngterest.get(
        params.interested_topic
      );
      salesforceParam.recordTypeId = this.drLeadRecordTypeId;
      const salesforceResponse = await this.salesforceServer.post(
        apiEndPoints.salesforceApi,
        salesforceParam
      );
      //Save leads on Leads DB
      if (salesforceResponse?.data?.data) {
        params.saleforceObjectId = salesforceResponse?.data?.data.Id;
        params.saleforceObjectStatus =
          salesforceResponse?.data?.data.ResultCode;
      }
      params.Interested_Topic = params.interested_topic;
      params.Qualification = params.highest_qualification;
      //   params.leadSource = leadSource;
      const response = await this.leadServer.post(apiEndPoints.leadApi, params);
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
