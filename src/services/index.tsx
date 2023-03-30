import {
  ApiServiceConstants,
  LalesforceApiServiceConstants,
  LeadApiServiceConstants,
  CountryCodeApiServiceConstants,
} from "@/data/axisos";
import axios from "axios";
import CountryCodeService from "./CountryCodeService";
import CourseService from "./CourseService";
import LeadService from "./LeadServices";

const appAPIServer = axios.create(ApiServiceConstants);
const leadApiServer = axios.create(LeadApiServiceConstants);
const CountryCodeApiServer = axios.create(CountryCodeApiServiceConstants);
const salesforceApiServer = axios.create(LalesforceApiServiceConstants);
const courseService = new CourseService(appAPIServer);
const countryCodeService = new CountryCodeService(CountryCodeApiServer);
const leadService = new LeadService(leadApiServer, salesforceApiServer);

export { courseService, leadService, countryCodeService };
