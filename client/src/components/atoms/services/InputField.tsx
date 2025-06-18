// Error validation component
import { ErrorMessageValidation } from "../ErrorMessageValidation";

// Type
import type { InputFieldType } from "../../../lib/types/services/components/input-field.type";

const InputField = ({ groupClassName, label, labelFor, error, ...rest }: InputFieldType) => {
    return (
        <div className={groupClassName}>
            <label htmlFor={labelFor}>{label}:</label>
            <input
                {...rest}
                className="font-inter"
            />
            {error && 
                <ErrorMessageValidation>
                    {error.message}
                </ErrorMessageValidation>
            }
        </div>
    )
}

export { InputField };