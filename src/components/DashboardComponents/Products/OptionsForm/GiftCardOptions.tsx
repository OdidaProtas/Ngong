import AddIcon from "@mui/icons-material/Add";

import Close from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useState } from "react";

export default function GiftCardOptions({ option, handleDelete, onSubmit }: any) {
  const [editState, setEditState] = useState(true);
  const toggleEditState = () => setEditState((prev) => !prev);

  const [values, setValues] = useState({});

  const [options, setOptions]: any = useState([{ 1: "" }]);

  const handleAddOption = () => {
    const newOpt: any = parseInt(options.length) + 1;
    const all: any = [...options];
    all.push({ ...{}, [newOpt.toString()]: null });
    setOptions(all);
  };

  const deleteField = (opt: any) => {
    const all = [...options];
    const index = all.indexOf(opt);
    if (index > -1) {
      all.splice(index, 1);
    }
    setOptions(all);
    if (all.length === 0) {
      setOptions([{ 1: null }]);
    }
  };

  const [optionName, setOptionName] = useState("");

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !!Object.keys(values).length &&
      !!values[Object.keys(values)[0]] &&
      !!optionName
    ) {
      onSubmit({
        values: values,
        option: option,
        name: optionName,
      });
      toggleEditState();
    } else {
      alert("Add a name and atleast one value");
    }
  };

  const isnull = !option[Object.keys(option)[0]];

  const data: any = Object.keys(option).map((opt) => option[opt])[0];
  const vals: any = data?.options || {};
  const name: any = data?.name || "";

  const optionData: any = Object.keys(vals).map((opt) => vals[opt]);

  return (
    <div>
      {isnull ? (
        <Box>
          <TextField
            size="small"
            color="secondary"
            placeholder="0"
            name="option"
            value={optionName}
            onChange={(e: any) => setOptionName(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleDelete(option)}>
                    <DeleteIcon />
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  Ksh
                </InputAdornment>
              ),
            }}
          ></TextField>
          {/* <Box mt={2} pl={3}>
            {options.map((opt: any, idx: number) => {
              return (
                <TextField
                  key={idx}
                  sx={{ mb: 2 }}
                  name={Object.keys(opt)[0]}
                  onChange={handleChange}
                  value={values[Object.keys(opt)[0]]}
                
                  placeholder="Value"
                  fullWidth
                  size="small"
                ></TextField>
              );
            })}
            <IconButton onClick={handleAddOption} sx={{ display: "inline" }}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box>
            <Button
              onClick={handleSubmit}
              size="small"
              color="inherit"
              variant="outlined"
              sx={{ mt: 3, textTransform: "none" }}
            >
              Done
            </Button>
          </Box> */}
        </Box>
      ) : (
        <Box sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography>{name}</Typography>
            {optionData?.map((opt: any) => (
              <Chip sx={{ mt: 1, ml: 1 }} label={opt} />
            ))}
          </Box>
          <Box>
            <Button
              onClick={() => handleDelete(option)}
              size="small"
              color="inherit"
              variant="outlined"
              sx={{ mt: 3, textTransform: "none" }}
            >
              Remove
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}
