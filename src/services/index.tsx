import {
  ApiServiceConstants,
  LalesforceApiServiceConstants,
  LeadApiServiceConstants,
  CountryCodeApiServiceConstants,
  WPApiServiceConstants,
} from "@/data/axisos";
import axios from "axios";
import CountryCodeService from "./CountryCodeService";
import CourseService from "./CourseService";
import LeadService from "./LeadServices";
import WpRestApiServices from "./WpRestApiServices";

const appAPIServer = axios.create(ApiServiceConstants);
const leadApiServer = axios.create(LeadApiServiceConstants);
const CountryCodeApiServer = axios.create(CountryCodeApiServiceConstants);
const salesforceApiServer = axios.create(LalesforceApiServiceConstants);
const wpApiServer = axios.create(WPApiServiceConstants);

const courseService = new CourseService(appAPIServer);
const countryCodeService = new CountryCodeService(CountryCodeApiServer);
const leadService = new LeadService(leadApiServer, salesforceApiServer);
const wpService = new WpRestApiServices(wpApiServer);

export { courseService, leadService, countryCodeService, wpService };
