// Type
import type { AuthInputFieldType } from '../../../lib/types/atoms/auth-input-field.type'

// Error validation component
import { ErrorMessageValidation } from '../ErrorMessageValidation'

const AuthInputField = ({ label, labelFor, error, ...rest }: AuthInputFieldType) => {
    return (
        <div className="group-form-users bg-transparent">
            <label
                htmlFor={labelFor}
                className="bg-transparent color-white"
            >
                {label}
            </label>
            <input
                {...rest}
                className="color-black bg-white font-inter"
            />
            {error && 
                <ErrorMessageValidation>
                    {error.message}
                </ErrorMessageValidation>
            }
        </div>
    )
}

export { AuthInputField };