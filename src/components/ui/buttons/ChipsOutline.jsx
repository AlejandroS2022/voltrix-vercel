
import { Chip } from "@mui/material";

const ChipsOutline = ({content}) => {
  return (
    <>
      <Chip label={content} variant="outlined" className="chip-outline"/>
    </>
  );
};

export default ChipsOutline;