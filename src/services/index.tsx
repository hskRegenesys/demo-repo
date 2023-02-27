import { ApiServiceConstants, LeadApiServiceConstants } from "@/data/axisos";
import axios from "axios";
import CourseService from "./CourseService";
import LeadService from "./LeadServices";

const appAPIServer = axios.create(ApiServiceConstants);
const leadApiServer = axios.create(LeadApiServiceConstants);
const courseService = new CourseService(appAPIServer);
const leadService = new LeadService(leadApiServer);

export { courseService, leadService };
