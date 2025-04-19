import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../atoms/ui/card"
import { Button } from "../atoms/ui/button"
import { ProductsTable } from "../templates/ProductTemplate"
import { ConfirmationDialog } from "../molecules/ConfirmationDialog"

const initialProducts = [
  { name: "Jugo de mango natural", total: 32, expirationDate: "2025-12-31" },
  { name: "Mermelada de fresa", total: 17, expirationDate: "2025-11-20" },
  { name: "Compota de manzana", total: 25, expirationDate: "2025-10-15" },
  { name: "Trozos de piña enlatados", total: 41, expirationDate: "2025-09-05" },
  { name: "Smoothie de frutos rojos", total: 29, expirationDate: "2025-08-30" },
  { name: "Banano deshidratado", total: 13, expirationDate: "2025-07-25" },
]

export default function ProductsScreen() {
  const [products, setProducts] = useState(initialProducts)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)

  const handleCreate = () => {
    const newProduct = {
      name: "Nuevo producto",
      total: 0,
      expirationDate: "2026-01-01",
    }
    setProducts([...products, newProduct])
  }

  const handleEdit = (index: number) => {
    const edited = [...products]
    edited[index].name += " (editado)"
    setProducts(edited)
  }

  const handleDelete = (index: number) => {
    setDeleteIndex(index)
    setShowDeleteDialog(true)
  }

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      const filtered = products.filter((_, i) => i !== deleteIndex)
      setProducts(filtered)
    }
    setShowDeleteDialog(false)
    setDeleteIndex(null)
  }

  const cancelDelete = () => {
    setShowDeleteDialog(false)
    setDeleteIndex(null)
  }

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
  )
}