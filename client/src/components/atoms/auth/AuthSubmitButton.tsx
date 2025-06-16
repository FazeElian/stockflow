// Type
import type { AuthSubmitButtonType } from "../../../lib/types/atoms/auth-submit-button.type";

const AuthSubmitButton = ({ text } : AuthSubmitButtonType) => {
    return (
        <button
            className="btn-submit-form-users bg-black-medium color-gray font-inter"
            type="submit"
        >
            {text}
        </button>
    )
}

export { AuthSubmitButton };