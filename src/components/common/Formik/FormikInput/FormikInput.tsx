import React, { ChangeEvent, FocusEvent, InputHTMLAttributes, forwardRef, useEffect, useRef } from "react";
import { useField } from "formik";
import styles from "./FormikInput.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onBlur" | "onChange">;

export interface IFormikInputProps extends HTMLInputProps {
    name: string;
    label?: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>, fieldValue: string, fieldName: string) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>, fieldValue: string, fieldName: string) => void;
    inputStyle?: "default" | "secondary";
    ref?: React.Ref<HTMLInputElement>;
    disabled?: boolean;
    focusOnInit?: boolean;
}

export const FormikInput = forwardRef<HTMLInputElement, IFormikInputProps>(
    (
        {
            label,
            onBlur,
            onChange,
            type = "text",
            disabled,
            focusOnInit, // It works only if a custom ref has not been passed
            ...props
        }: IFormikInputProps,
        ref
    ) => {
        const inputRef = useRef<null | HTMLInputElement>(null);
        const [field] = useField(props.name);
        const { value: fieldValue, name: fieldName } = field;

        const handleOnBlurAction = (event: FocusEvent<HTMLInputElement>) => {
            field.onBlur(event);
            onBlur?.(event, fieldValue, fieldName);
        };

        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
            field.onChange(event);
            onChange?.(event, fieldValue, fieldName);
        };

        useEffect(() => {
            if (focusOnInit) inputRef.current?.focus();
        }, [focusOnInit]);

        return (
            <div className={styles.inputContainer}>
                <label htmlFor={field.name}>{label}</label>
                <input
                    {...field}
                    {...props}
                    type={type}
                    onChange={handleOnChange}
                    onBlur={handleOnBlurAction}
                    disabled={disabled}
                    ref={ref ?? inputRef}
                />
            </div>
        );
    }
);
