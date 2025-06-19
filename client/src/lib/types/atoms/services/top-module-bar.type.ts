export type TopModuleBarType = {
    inputName: string;
    searchPlaceholder: string;
    exportText?: string
    newText: string;
    shortNewText: string;
}

export type SearchBarType = Pick<TopModuleBarType, "inputName" | "searchPlaceholder">
export type ModuleOptionsType = Pick<TopModuleBarType, "exportText" | "newText" | "shortNewText">