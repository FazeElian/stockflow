import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Type
import { Customer } from "../../../types/customer";

// API Call
import { getCustomerById } from "../../../api/customer";
import { EditCustomerForm } from "./EditCustomerForm";

// Loader component
import { Loading } from "../../../components/Loading";
import { toast } from "sonner";

const EditCustomerView = () => {
    const { id } = useParams<{ id: string }>();
    const idNumber = id ? Number(id) : undefined;
    const navigate = useNavigate()
    
    const { data: customer, isLoading } = useQuery<Customer>({
        queryKey: ["customer", idNumber],
        queryFn: () => getCustomerById(idNumber!),
        enabled: !!idNumber,
        staleTime: 5 * 60 * 1000
    });

    if (isLoading) return <Loading />;

    if (customer) {
        return (
            <main className="content-page--admin">
                <EditCustomerForm
                    id={customer.id}
                    name={customer.name}
                    description={customer.description}
                />
            </main>
        )
    } else {
        navigate("/admin/customers")
        return toast.error("Este cliente no existe o ha sido eliminada.")
    }
}

export default EditCustomerView