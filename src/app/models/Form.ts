interface Sheet {
  cant: number;
}

interface Size {
  size: number;
  cant: number;
}

interface Product {
  prodId: string;
  cant: number;
}

export interface FormObject {
  plates: Product;
  papper: Product;
  sizes: Size;
  machine: Product;
  workLabor?: boolean;
}
