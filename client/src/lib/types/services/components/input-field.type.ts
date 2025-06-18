import type { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

export interface InputFieldType extends InputHTMLAttributes<HTMLInputElement> {
    groupClassName?: string;
    label: string;
    labelFor: string;
    error?: FieldError;
}