import * as React from "react";
import Button from "@mui/material/Button";

export default function Control({ handleSubmit, resetChange, content, color }) {
  const onClickHandler = handleSubmit || resetChange;

  return (
    <Button
      variant="contained"
      onClick={onClickHandler}
      sx={{
        backgroundColor: color || "#333",
        color: "white",
        px: 4,
        py: 1,
        borderRadius: "25px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        "&:hover": {
          backgroundColor: color || "#111",
        },
      }}
    >
      {content}
    </Button>
  );
}
