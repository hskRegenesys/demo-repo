import { ApiServiceConstants } from "@/data/axisos";
import axios from "axios";
import CourseService from "./CourseService";

const appAPIServer = axios.create(ApiServiceConstants);

const courseService = new CourseService(appAPIServer);

export { courseService };
