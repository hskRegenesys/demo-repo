import React from "react";
import { FieldErrors, UseFormRegister, FieldError } from "react-hook-form";
import Styles from "./requestForm.module.css";

interface Course {
  id: number;
  name: string;
}

interface CourseSelectProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  courses: Course[];
  programmeOfInterest: string;
  mixpanel: any;
}

const CourseSelect: React.FC<CourseSelectProps> = ({
  register,
  errors,
  courses,
  programmeOfInterest,
  mixpanel,
}) => {
  const getErrorMessage = (error: FieldError | undefined) => {
    if (error) {
      return error.message as string;
    }
    return "";
  };

  return (
    <div className={Styles.selectWrapper}>
      <select
        {...register("Programme_Of_Interest", {
          required: "Programme of Interest is required",
        })}
        className={
          errors.Programme_Of_Interest ? Styles.selectError : Styles.select
        }
        onBlur={() =>
          mixpanel.track("form_interaction", { field: "Programme_Of_Interest" })
        }
        aria-label="Programme of Interest"
      >
        <option value="" disabled selected>
          Select Programme of Interest*
        </option>
        {courses.map((course) => (
          <option key={course.id} value={course.name}>
            {course.name}
          </option>
        ))}
      </select>
      {errors.Programme_Of_Interest && (
        <p className={Styles.errorMsg}>
          {getErrorMessage(errors.Programme_Of_Interest as FieldError)}
        </p>
      )}
    </div>
  );
};

export default CourseSelect;
