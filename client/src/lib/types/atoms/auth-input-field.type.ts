import type { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

export interface AuthInputFieldType extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    labelFor: string;
    error?: FieldError;
}