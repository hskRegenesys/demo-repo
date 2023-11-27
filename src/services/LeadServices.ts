import { leadSource, sourceCampaign } from "@/components/config/constant";
import { apiEndPoints } from "@/data/axisos";
import axios from "axios";

class LeadService {
  static allCourses: any;
  salesforceProgramOfIngterest = new Map([
    ["Cyber Security", "Cyber Security"],
    ["Data Science", "Data Science"],
    ["Digital Marketing", "Digital Marketing"],
    ["Project Management", "Project Management"],
    ["Design Thinking", "Design Thinking"],
    ["Artificial Intelligence", "Artificial Intelligence"],
  ]);

  drLeadRecordTypeId = "0127Q000000NDbXQAW";
  constructor(private leadServer: any, private salesforceServer: any) {
    this.leadServer = leadServer;
    this.salesforceServer = salesforceServer;
  }
  // CRM API

  async scriptData(crmData: any) {
    axios
      .post(
        "https://api.vinecrms.com/api/",
        {
          domain: "crm",
          type: "add_lead_to_crm",
          name: crmData.Name,
          email: crmData.Email,
          mobile: crmData.Phone,
          city: crmData.city,
          source: crmData.utm_source,
          campaign: crmData.utm_campaign,
          utm_source: crmData.Lead_Source,
          utm_medium: crmData.utm_medium,
          utm_campaign: crmData.Source_Campaign,
          utm_term: crmData.utm_term,
          utm_content: crmData.utm_content,
          utm_url: crmData.page_url,
          country: "NIGERIA",
          interest: crmData.Programme_Of_Interest,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response: any) => {})
      .catch((error: any) => {
        console.error("Error:", error);
      });
  }

  async saveLead(params: any) {
    let result: any = [];
    try {
      //Save leads on Salesforce
      let salesforceParam = { ...params };
      salesforceParam.Programme_Of_Interest =
        this.salesforceProgramOfIngterest.get(params.Programme_Of_Interest);
      salesforceParam.recordTypeId = this.drLeadRecordTypeId;
      salesforceParam.Lead_Source = leadSource;
      salesforceParam.Source_Campaign = sourceCampaign;
      // salesforce api call
      let phoneNumber = salesforceParam.Phone;
      // let salesforceResponse
      // if (!(phoneNumber.startsWith("+234")) ){
      //    salesforceResponse = await this.salesforceServer.post(
      //       apiEndPoints.salesforceApi,
      //       salesforceParam
      //     );
      // }

      // const salesforceResponse = await this.salesforceServer.post(
      //   apiEndPoints.salesforceApi,
      //   salesforceParam
      // );
      if (!phoneNumber.startsWith("+234")) {
        const salesforceResponse = await this.salesforceServer.post(
          apiEndPoints.salesforceApi,
          salesforceParam
        );
        if (salesforceResponse?.data?.data) {
          params.saleforceObjectId = salesforceResponse?.data?.data.Id;
          params.saleforceObjectStatus =
            salesforceResponse?.data?.data.ResultCode;
        }
      }
      let crmData = { ...salesforceParam };
      if (phoneNumber.startsWith("+234")) {
        this.scriptData(crmData);
      }
      //Save leads on Leads DB
      // if (salesforceResponse?.data?.data) {
      //   params.saleforceObjectId = salesforceResponse?.data?.data.Id;
      //   params.saleforceObjectStatus =
      //     salesforceResponse?.data?.data.ResultCode;
      // }
      params.Interested_Topic = params.Programme_Of_Interest;
      params.Qualification = params.highest_qualification;
    } catch (err: any) {
      result = err?.response;
      console.log("Error while getting student details ", err.message);
    }

    try {
      const response = await this.leadServer.post(apiEndPoints.leadApi, params);
      result = response?.data;
    } catch (err) {
      console.log("Leads Api Error ");
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  }
}

export default LeadService;
