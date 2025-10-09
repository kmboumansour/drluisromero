
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const CountryCode = ({ value, onChange }) => {
 
  return (
    <PhoneInput
    country={"ve"}
      enableSearch={true}
      value={value}
      onChange={onChange}
  />
  )
}

export default CountryCode
