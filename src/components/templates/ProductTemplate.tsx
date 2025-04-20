import { ColumnConfig } from "@/types/table"
import { DynamicDataTable } from "../organisms/DynamicDataTable"

interface FileHistoryTemplateProps {
  readonly data: any[]
  readonly columnsConfig: ColumnConfig[]
}

export default function FileHistoryTemplate({ data, columnsConfig }: FileHistoryTemplateProps) {
  return (
    <section>
      <div className="mb-4 flex flex-col ">
        <h2 className="text-2xl font-bold tracking-tight">Procesos</h2>
        <p className="text-muted-foreground">
          Lista de productos
        </p>
      </div>

      <DynamicDataTable data={data} columnsConfig={columnsConfig} />
    </section>
  )
}
