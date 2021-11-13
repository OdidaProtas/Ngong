import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import Box from "@mui/system/Box";
import { createRef, useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../../../../state";
import Options from "./Options";

export default function OptionsForm({ handleChange, values }: any) {
  const [options, setOptions]: any = useState(JSON.parse(values.options));

  const { productID }: any = useParams();

  const handleAddOption = () => {
    const newOpt: any = parseInt(options.length) + 1;
    const all: any = [...options];
    all.push({ ...{}, [newOpt.toString()]: null });
    setOptions(all);
    console.log(all);
  };

  const handleDelete = (option: any) => {
    const all = [...options];
    const index = all.indexOf(option);
    if (index > -1) {
      all.splice(index, 1);
    }
    setOptions(all);
    if (all.length === 0) {
      setOptions([{ 1: null }]);
      checkbox.current.click();
    }
    handleChange({
      target: {
        name: "options",
        value: JSON.stringify(all),
      },
    });
  };

  const checkbox: any = createRef();

  const onSubmit = (val: any) => {
    const all = [...options];
    const index = all.indexOf(val.option);
    if (index > -1) {
      all.splice(index, 1);
      all.push({
        ...{},
        [Object.keys(val.option)[0]]: {
          name: val.name,
          options: val.values,
        },
      });
      setOptions(all);
      handleChange({
        target: {
          name: "options",
          value: JSON.stringify(all),
        },
      });
    }
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            ref={checkbox}
            size="small"
            color="secondary"
            name={"hasOptions"}
            value={values.hasOptions}
            onChange={handleChange}
            defaultChecked={values.hasOptions}
          />
        }
        label="This product has options, like size"
      />
      {values.hasOptions ? (
        <div>
          <Divider sx={{ mt: 3, mb: 1 }} />
          <Box sx={{ mt: 1 }}>
            {options.map((option: any, idx: number) => {
              return (
                <Box key={idx}>
                  <Options
                    onSubmit={onSubmit}
                    handleDelete={handleDelete}
                    option={option}
                  />
                  <Divider sx={{ mt: 3, mb: 2 }} />
                </Box>
              );
            })}
            <Button
              onClick={handleAddOption}
              sx={{ textTransform: "none" }}
              color="secondary"
            >
              Add another option
            </Button>
          </Box>
        </div>
      ) : null}
    </div>
  );
}
