import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<Type> extends Imprimivel, Comparavel<Type> {

}