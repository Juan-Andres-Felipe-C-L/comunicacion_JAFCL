export interface Producto {
    id: string;
    nombre: string;
    categoria: string;
    precio: number;
    stock: number;
}

export type NuevoProducto = Omit<Producto, "id">;