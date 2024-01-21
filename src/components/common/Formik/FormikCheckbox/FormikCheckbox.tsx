import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import styles from "./FormikCheckbox.module.scss";
import { useField } from "formik";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export interface IFormikCheckboxProps extends HTMLInputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>, fieldValue: string, fieldName: string) => void;
    name: string;
    label: string;
}

export const FormikCheckbox: FC<IFormikCheckboxProps> = ({ onChange, label, ...props }) => {
    const [field] = useField(props.name);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        field.onChange(event);
        onChange?.(event, event.target.value, field.name);
    };

    return (
        <div className={styles.inputContainer}>
            <input
                type="checkbox"
                role="switch"
                checked={field.value}
                onChange={handleChange}
                id={field.name}
                {...props}
            />
            <label htmlFor={field.name}>{label}</label>
        </div>
    );
};
