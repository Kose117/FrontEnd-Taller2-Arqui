// store.ts
import { BrowserEventEmitter } from "../lib/utils/browseEventEmitter";
import dispatcher from "../dispatcher/xDispatcher";

interface Product {
  name: string;
  expirationDate: string;
}

let _products: Product[] = [
  { name: "Jugo de mango natural", expirationDate: "2025-12-31" },
  { name: "Mermelada de fresa", expirationDate: "2025-11-20" },
  { name: "Compota de manzana", expirationDate: "2025-10-15" },
  { name: "Trozos de piña enlatados", expirationDate: "2025-09-05" },
  { name: "Smoothie de frutos rojos", expirationDate: "2025-08-30" },
  { name: "Banano deshidratado", expirationDate: "2025-07-25" },
];

class ProductStore extends BrowserEventEmitter {
  getProducts() {
    return _products;
  }

  handleActions(action: any) {
    switch (action.type) {
      case "CREATE_PRODUCT":
        _products.push({
          name: "Nuevo producto",
          expirationDate: "2026-01-01",
        });
        this.emit();
        break;

      case "EDIT_PRODUCT":
        _products[action.payload].name += " (editado)";
        this.emit();
        break;

      case "DELETE_PRODUCT":
        _products = _products.filter((_, i) => i !== action.payload);
        this.emit();
        break;

      default:
        break;
    }
  }
}

const store = new ProductStore();
dispatcher.register(store.handleActions.bind(store));

export default store;
