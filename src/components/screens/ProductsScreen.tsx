import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductTemplate from '@/components/templates/ProductTemplate';
import { ColumnConfig } from '@/types/table';
import { CheckCircle } from 'lucide-react';
import {
  useProductStore,
} from '@/hooks/flux/product/useProductStore';
import {
  useProductActions,
} from '@/hooks/flux/product/useProductActions';

/* ---------- helpers ---------- */

const usd = (v: number) =>
  `$${v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const fmtDate = (d: string | Date) =>
  new Date(d).toISOString().split('T')[0];

const toTableRow = (p: any) => ({
  id: p.id,
  name: p.name,
  price: usd(p.price),
  quantity: { label: String(p.quantity) },     // badgeWithText sin texto adicional
  expirationDate: fmtDate(p.expirationDate),
});

/* ---------- ColumnConfig ---------- */

function columns({
  onEdit, onDelete,
}: {
  onEdit: (row: any) => void;
  onDelete: (row: any) => void;
}): ColumnConfig[] {
  return [
    { id: 'id', accessorKey: 'id', headerLabel: 'ID', searchable: true },
    { id: 'name', accessorKey: 'name', headerLabel: 'Nombre', searchable: true },
    { id: 'price', accessorKey: 'price', headerLabel: 'Precio (USD)' },
    {
      id: 'quantity',
      accessorKey: 'quantity',
      headerLabel: 'Stock',
      type: 'badgeWithText',
      badgeKey: 'label',
      badgeVariant: 'default',
    },
    { id: 'expirationDate', accessorKey: 'expirationDate', headerLabel: 'Vence' },
    {
      id: 'actions',
      type: 'actions',
      actionItems: [
        { label: 'Editar', onClick: onEdit },
        { label: 'Eliminar', onClick: onDelete },
      ],
    },
  ];
}

/* ---------- Screen ---------- */

export default function ProductListScreen() {
  const { products } = useProductStore();
  const { loadUserProducts, updateProduct, deleteProduct } = useProductActions();
  const navigate = useNavigate();

  /* cargar al montar */
  useEffect(() => { loadUserProducts(); }, [loadUserProducts]);

  /* transformar datos para la tabla */
  const tableData = useMemo(() => products.map(toTableRow), [products]);

  /* acciones UI */
  const handleEdit = async (row: any) => {
    const newName = window.prompt('Nuevo nombre:', row.name);
    if (!newName || newName === row.name) return;
    await updateProduct(row.id, { name: newName });
  };

  const handleDelete = async (row: any) => {
    if (window.confirm(`¿Eliminar producto "${row.name}"?`)) {
      await deleteProduct(row.id);
    }
  };

  const cols = useMemo(
    () => columns({ onEdit: handleEdit, onDelete: handleDelete }),
    [handleEdit, handleDelete],
  );

  return (
    <ProductTemplate data={tableData} columnsConfig={cols} />
  );
}