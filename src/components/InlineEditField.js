import { InputBase, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import './InlineEditField.css';

const defaultMessage = "חללי השואה האיומה"

function MultilineEdit({ value, setValue, textInputRef }) {
    
    const [editingValue, setEditingValue] = useState(defaultMessage);

    const onChange = (event) => setEditingValue(event.target.value);

    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
            event.target.blur();
        }
    };

    // const onBlur = (event) => {
    //     if (event.target.value.trim() === "") {
    //         setValue(defaultMessage);
    //     } else {
    //         setValue(event.target.value);
    //     }
    // };
    const onBlur = (event) => {
        if (event.target.value.trim() === "") {
            setEditingValue(defaultMessage);
        } else {
            setValue(event.target.value)
        }
    }

    const onFocus = (event) => {
        console.log(event.target.value);
        if (event.target.value === defaultMessage)
            setEditingValue("");
        
    };

    // const textareaRef = useRef();
    // useEffect(() => {
    //     onInput(textareaRef.current);
    // }, [onInput, textareaRef]);

    return (
        <InputBase
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            inputProps={{
                maxLength: 40,
                // maxRows: 3,
                direction: 'rtl',
                style: {
                    textAlign: 'center',
                    fontWeight: 400,
                    fontSize: '2.125rem',
                    lineHeight: 1.235,
                    letterSpacing: '0.00735em',
                    fontFamily: 'Assistant',
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
            inputRef={textInputRef}
        />
    );
};

export default function InlineEditField({ textInputRef }) {
    const [value, setValue] = useState();
    return <MultilineEdit value={value} setValue={setValue} textInputRef={textInputRef} />
}