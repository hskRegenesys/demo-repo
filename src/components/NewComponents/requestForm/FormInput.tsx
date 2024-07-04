import React from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormTrigger,
  UseFormSetValue,
  FieldError,
} from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Styles from "./requestForm.module.css";

interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  trigger: UseFormTrigger<any>;
  setValue?: UseFormSetValue<any>;
  setPhoneNumber?: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumberError?: React.Dispatch<React.SetStateAction<string>>;
  geoLocationData?: any;
  validator?: any;
  mixpanel: any;
  phoneNumber?: string;
  phoneNumberError?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  placeholder,
  register,
  errors,
  trigger,
  setValue,
  setPhoneNumber,
  setPhoneNumberError,
  geoLocationData,
  validator,
  mixpanel,
  phoneNumber,
  phoneNumberError,
}) => {
  const handlePhoneInputChange = (value: string | undefined) => {
    if (setPhoneNumber && setValue) {
      setPhoneNumber(value || "");
      setValue(name, value || "", { shouldValidate: true });

      if (value && validator.isMobilePhone(value)) {
        setPhoneNumberError && setPhoneNumberError("");
      } else {
        setPhoneNumberError && setPhoneNumberError("Invalid phone number");
      }
    }
  };

  const getErrorMessage = (error: FieldError | undefined) => {
    if (error) {
      return error.message as string;
    }
    return "";
  };

  return (
    <div className={Styles.formGroup}>
      {type === "phone" ? (
        <div className={Styles.phoneInputWrapper}>
          <PhoneInput
            international
            defaultCountry={geoLocationData?.country_code}
            value={phoneNumber}
            onChange={handlePhoneInputChange}
            className={
              errors[name] ? Styles.phoneInputError : Styles.phoneInput
            }
            placeholder={placeholder}
          />
          {phoneNumberError && (
            <p className={Styles.errorMsg}>{phoneNumberError}</p>
          )}
        </div>
      ) : (
        <input
          type={type}
          {...register(name, { required: `${name} is required` })}
          placeholder={placeholder}
          className={errors[name] ? Styles.inputError : Styles.input}
          onBlur={() => trigger(name)}
        />
      )}
      {errors[name] && (
        <p className={Styles.errorMsg}>
          {getErrorMessage(errors[name] as FieldError)}
        </p>
      )}
    </div>
  );
};

export default FormInput;
