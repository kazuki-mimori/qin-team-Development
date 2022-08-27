import { Input } from "@mantine/core";

function InputItem(props: { label: string; massage: string; size: any }) {
  return (
    <>
      <Input.Wrapper label={props.label}>
        <Input placeholder={props.massage} size={props.size} />
      </Input.Wrapper>
    </>
  );
}

export default InputItem;
