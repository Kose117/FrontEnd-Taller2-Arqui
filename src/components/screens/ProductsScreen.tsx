import { useState, useEffect } from "react";
import productStore from "../../stores/xStores";
import {
  createProduct,
  editProduct,
  deleteProduct,
} from "../../actions/xActions";
import {
  Card, CardHeader, CardTitle, CardContent, CardFooter,
} from "../atoms/ui/card";
import { Button } from "../atoms/ui/button";
import { ProductsTable } from "../templates/ProductTemplate";
import { ConfirmationDialog } from "../molecules/ConfirmationDialog";

export default function ProductsScreen() {
  const [products, setProducts] = useState(productStore.getProducts());
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  useEffect(() => {
    const onChange = () => {
      setProducts([...productStore.getProducts()]);
    };
    productStore.on( onChange);

    return () => {
      productStore.off( onChange);
    };
  }, []);

  const handleCreate = () => createProduct();
  const handleEdit = (index: number) => editProduct(index);

  const handleDelete = (index: number) => {
    setDeleteIndex(index);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      deleteProduct(deleteIndex);
    }
    setShowDeleteDialog(false);
    setDeleteIndex(null);
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
    setDeleteIndex(null);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
      <Card className="w-full max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl md:text-2xl">
            Gestión de productos
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <ProductsTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </CardContent>
        <CardFooter className="justify-end">
          <Button onClick={handleCreate}>Crear producto</Button>
        </CardFooter>
      </Card>
      <ConfirmationDialog
        isOpen={showDeleteDialog}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        title="¿Seguro quieres eliminar?"
        description="Esta acción eliminará el producto permanentemente."
        confirmText="Eliminar"
        cancelText="Cancelar"
      />
    </div>
  );
}
