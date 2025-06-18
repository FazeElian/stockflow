// Error validation component
import { ErrorMessageValidation } from "../ErrorMessageValidation";

// Type
import type { TextAreaFieldType } from "../../../lib/types/services/components/textarea-field.type"

const TextAreaField = ({ groupClassName, label, labelFor, error, ...rest }: TextAreaFieldType) => {
    return (
        <div className={groupClassName}>
            <label htmlFor={labelFor}>{label}:</label>
            <textarea {...rest} className="font-inter" />
            {error && 
                <ErrorMessageValidation>
                    {error.message}
                </ErrorMessageValidation>
            }
        </div>
    )
}

export { TextAreaField };