import React from 'react';
import {FieldError} from "react-hook-form";
import {FieldWrapper} from "./FieldWrapper";
import clsx from 'clsx';

export type SelectProps = {
    name: string;
    label: string;
    selectProps?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
    error?: FieldError;
}

export const Select: React.FC<SelectProps> = ({name, label, selectProps, error, children}) => {
    return <FieldWrapper name={name} label={label} error={error}>
        <select
            id={name}
            name={name}
            className={clsx(
                'transition-colors duration-300',
                'block w-full py-3 px-4 text-black',
                'bg-white border-b border-lg rounded-lg', {
                    'border-red-500': error
                }
            )}
            {...selectProps}
        >
            {children}
        </select>
    </FieldWrapper>
};
