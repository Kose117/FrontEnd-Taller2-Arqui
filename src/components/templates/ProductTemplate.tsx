import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
  } from "../atoms/ui/table"
  import { Button } from "../atoms/ui/button"
  import { Badge } from "../atoms/ui/badge"
  
  export function ProductsTable({ products, onEdit, onDelete }: any) {
    return (
      <div className="w-full overflow-x-auto rounded-lg border">
        <Table className="w-full min-w-[600px]">
          <TableHeader>
            <TableRow>
              <TableHead>Producto</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Vencimiento</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">{product.name}</TableCell>
                <TableCell>
                  <Badge variant="approved">{product.total}</Badge>
                </TableCell>
                <TableCell className="whitespace-nowrap">{product.expirationDate}</TableCell>
                <TableCell className="text-right space-x-2 whitespace-nowrap">
                  <Button variant="secondary" size="sm" onClick={() => onEdit(index)}>
                    Editar
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => onDelete(index)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  