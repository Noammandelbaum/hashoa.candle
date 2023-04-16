import { InputBase, Typography } from "@mui/material";
import { useState } from "react";

const defaultMessage = "ששת המליונים"

function MultilineEdit({ value, setValue, inputStat, setInputStat }) {

    const [editingValue, setEditingValue] = useState(defaultMessage);


    const onChange = (event) => setEditingValue(event.target.value);

    const onBlur = (event) => {
        setInputStat(false);
        if (event.target.value.trim() === "") {
            setEditingValue(defaultMessage);
        } else {
            setValue(event.target.value)
        }
    }

    const onFocus = (event) => {
        setInputStat(true);
        if (event.target.value === defaultMessage)
            setEditingValue("");
    };

    return (
        <>
            {inputStat ?
                <InputBase
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    autoFocus
                    inputProps={{
                        maxLength: 40,
                        direction: 'rtl',
                        style: {
                            textAlign: 'center',
                            fontWeight: 400,
                            fontSize: '2.125rem',
                            lineHeight: 1.235,
                            letterSpacing: '0.00735em',
                            fontFamily: 'Rubik, sans-serif',
                            color: '#000000',
                        }

                    }}
                    sx={{
                        mb: 3,

                    }}
                    variant="outlined"
                    multiline
                    fullWidth
                    value={editingValue}
                    id="mui-theme-provider-input"
                />
                :
                <Typography
                    onClick={() => { setInputStat(true); }}
                    style={{
                        fontFamily: 'Rubik, sans-serif',
                        color: '#000000',
                    }}
                    sx={{ mb: 4 }}
                    gutterBottom
                    variant="h4"
                    component="div"
                >
                    {editingValue}
                </Typography>
            }
        </>
    );
};

export default function InlineEditField({ inputStat, setInputStat }) {
    const [value, setValue] = useState();
    return (
        <MultilineEdit
            value={value}
            setValue={setValue}
            inputStat={inputStat}
            setInputStat={setInputStat}

        />
    )
}