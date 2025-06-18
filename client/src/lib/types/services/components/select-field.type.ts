import type { SelectHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

// Types
import type { SimpleSelectOptionType } from "./simple-select-option.type";

export interface SelectFieldType extends SelectHTMLAttributes<HTMLSelectElement> {
    optionsList?: SimpleSelectOptionType[]
    groupClassName?: string;
    label: string;
    labelFor: string;
    error?: FieldError;
}