interface ItemChooseYourPlan {
    id: number,
    title: string,
    duration: string,
    price: string,
} 

const ItemsChooseYourPlan: ItemChooseYourPlan[] = [
    {
        id: 1,
        title: "Plan Mensual",
        duration: "1 Mes",
        price: "49,900",
    },
    {
        id: 2,
        title: "Plan Semestral",
        duration: "6 Meses",
        price: "249,900",
    },
    {
        id: 3,
        title: "Plan Anual",
        duration: "12 Meses",
        price: "449,900",
    },
];

export default ItemsChooseYourPlan;