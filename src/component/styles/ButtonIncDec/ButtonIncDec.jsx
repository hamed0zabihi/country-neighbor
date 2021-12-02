import { Input } from "reactstrap";

const ButtonIncDec = ({ handleClick, defaultData }) => {
  return (
    <>
      <Input
        type="number"
        min={2}
        max={100}
        defaultValue={defaultData}
        onChange={(e) => handleClick(e)}
        disabled
      />
    </>
  );
};

export default ButtonIncDec;
