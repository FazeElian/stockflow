import type { TextareaHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

export interface TextAreaFieldType extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    groupClassName?: string;
    label: string;
    labelFor: string;
    error?: FieldError;
}