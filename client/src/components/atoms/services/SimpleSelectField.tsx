// Error validation component
import { ErrorMessageValidation } from "../ErrorMessageValidation";

// Types
import type { SelectFieldType } from "../../../lib/types/services/components/select-field.type"
import type { SimpleSelectOptionType } from "../../../lib/types/services/components/simple-select-option.type";

const SimpleSelectField = ({
    optionsList,
    groupClassName,
    label,
    labelFor,
    error,
    ...rest
} : SelectFieldType) => {
    return (
        <div className={groupClassName}>
            {/* State of the product */}
                <label htmlFor={labelFor}>{label}:</label>
                <select
                    {...rest}
                    className="font-inter"
                >
                    {optionsList?.map((option : SimpleSelectOptionType) => (
                        <option value={option.value} key={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            {error && 
                <ErrorMessageValidation>
                    {error.message}
                </ErrorMessageValidation>
            }
        </div>
    )
}

export { SimpleSelectField };