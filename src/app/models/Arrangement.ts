import { Addon } from "./Addon";

export interface Arrangement{
    id?: string;
    name?: string;
    longDescription?: string;
    category?: string;
    price?: number;
    availableAddons?:Addon[];
    selectedAddons?:Addon[];
    addonNames?:string[];
    message?: string;
    popularity?: number;
    active?: boolean;
    imageUrl?: string;
}