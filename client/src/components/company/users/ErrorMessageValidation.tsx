// Styles for this component
import "../../../assets/css/components/company/users/ErrorMessageValidation.css";

interface ErrorMessageValidationProps {
    children: React.ReactNode
}

const ErrorMessageValidation = ({ children } : ErrorMessageValidationProps) => {
    return (
        <p className="message-error-validation bg-transparent">{children}</p>
    )
}

export default ErrorMessageValidation