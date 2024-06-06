export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
    const matchingItems = lista1.filter((itemLista1) => lista2.includes(itemLista1));
    return matchingItems.length >= 2 || lista1.every((itemLista1) => lista2.includes(itemLista1));
}