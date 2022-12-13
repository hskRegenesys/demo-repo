import { apiEndPoints } from "@/data/axisos";

class CourseService {
  constructor(private appAPIServer: any) {
    this.appAPIServer = appAPIServer;
  }
  async allCourses() {
    let result = [];
    try {
      // const response = await this.appAPIServer.get(apiEndPoints.coursesApi);
      // result = response?.data;
      result = [
        {
          id: 28,
          name: "Project Management",
          code: "Project Management",
          description: "Project Management",
          parent_id: null,
          mode_id: 1,
          isAddon: false,
          courseMode: {
            id: 1,
            name: "Live",
            description: "Live",
          },
          batches: [
            {
              id: 21,
              name: "10th DEC 2022 - 11th Feb 2023",
              code: "DEC2022",
              description: "Batch Starting from 13th May 2023",
              course_id: 28,
              start_date: "2022-12-10T00:00:00.000Z",
              end_date: "2023-02-11T00:00:00.000Z",
            },
          ],
        },
        {
          id: 29,
          name: "Cybersecurity",
          code: "Cybersecurity",
          description: "Cybersecurity",
          parent_id: null,
          mode_id: 1,
          isAddon: false,
          courseMode: {
            id: 1,
            name: "Live",
            description: "Live",
          },
          batches: [
            {
              id: 22,
              name: "05th DEC 2022 - 31th Jan 2023",
              code: "DEC2022",
              description: "Batch Starting from 13th May 2023",
              course_id: 29,
              start_date: "2022-12-05T00:00:00.000Z",
              end_date: "2023-01-31T00:00:00.000Z",
            },
          ],
        },
        {
          id: 33,
          name: "Project Management",
          code: "Project Management",
          description: "Project Management",
          parent_id: null,
          mode_id: 2,
          isAddon: false,
          courseMode: {
            id: 2,
            name: "Self Paced",
            description: "Self Paced",
          },
          batches: [],
        },
        {
          id: 31,
          name: "Data Science",
          code: "Data Science",
          description: "Data Science",
          parent_id: null,
          mode_id: 2,
          isAddon: false,
          courseMode: {
            id: 2,
            name: "Self Paced",
            description: "Self Paced",
          },
          batches: [],
        },
        {
          id: 34,
          name: "Finance for non finance managers",
          code: "Finance for non finance managers",
          description: "Finance for non finance managers",
          parent_id: null,
          mode_id: 2,
          isAddon: false,
          courseMode: {
            id: 2,
            name: "Self Paced",
            description: "Self Paced",
          },
          batches: [],
        },
        {
          id: 10,
          name: "Data Science",
          code: "Data Science",
          description: "Data Science",
          parent_id: null,
          mode_id: 1,
          isAddon: false,
          courseMode: {
            id: 1,
            name: "Live",
            description: "Live",
          },
          batches: [],
        },
        {
          id: 37,
          name: "Design Thinking",
          code: "Design Thinking",
          description: "Design Thinking",
          parent_id: null,
          mode_id: 2,
          isAddon: false,
          courseMode: {
            id: 2,
            name: "Self Paced",
            description: "Self Paced",
          },
          batches: [],
        },
        {
          id: 32,
          name: "Digital Marketing",
          code: "Digital Marketing",
          description: "Digital Marketing",
          parent_id: null,
          mode_id: 2,
          isAddon: false,
          courseMode: {
            id: 2,
            name: "Self Paced",
            description: "Self Paced",
          },
          batches: [],
        },
        {
          id: 24,
          name: "Digital Marketing",
          code: "Digital Marketing",
          description: "Digital Marketing",
          parent_id: null,
          mode_id: 1,
          isAddon: false,
          courseMode: {
            id: 1,
            name: "Live",
            description: "Live",
          },
          batches: [],
        },
        {
          id: 30,
          name: "Coding",
          code: "Coding",
          description: "Coding",
          parent_id: null,
          mode_id: 2,
          isAddon: false,
          courseMode: {
            id: 2,
            name: "Self Paced",
            description: "Self Paced",
          },
          batches: [],
        },
        {
          id: 36,
          name: "Cryptocurrency",
          code: "Cryptocurrency",
          description: "Cryptocurrency",
          parent_id: null,
          mode_id: 2,
          isAddon: false,
          courseMode: {
            id: 2,
            name: "Self Paced",
            description: "Self Paced",
          },
          batches: [],
        },
        {
          id: 35,
          name: "Professional Business Writing",
          code: "Professional Business Writing",
          description: "Professional Business Writing",
          parent_id: null,
          mode_id: 2,
          isAddon: false,
          courseMode: {
            id: 2,
            name: "Self Paced",
            description: "Self Paced",
          },
          batches: [],
        },
      ];
    } catch (err: any) {
      // result = err?.response;
      console.log("Error while getting student details ", err.message);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  }
}

export default CourseService;
