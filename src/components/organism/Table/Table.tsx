import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { ChangeEvent, memo, ReactNode } from "react"
import Stack from "@mui/material/Stack"

export type TTableWrapper = {
  header: ReactNode
  rows: ReactNode
  allowPagination?: boolean
  currentPage?: number
  onChangePagination?: (event: ChangeEvent<unknown>, pageNum: number) => void
  totalPages?: number
}
const TableWrapper = ({
  header,
  rows,
  allowPagination,
  currentPage,
  onChangePagination,
  totalPages,
}: TTableWrapper) => {
  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, p: 12 }} aria-label="simple table">
          <TableHead sx={{ p: 12 }}>
            <TableRow>{header}</TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
      {allowPagination && (
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            my: 2.5,
            backgroundColor: "#fff",
            p: 5,
            borderRadius: 1,
          }}
        >
          <Pagination
            page={currentPage}
            onChange={onChangePagination}
            count={totalPages}
            color="primary"
            size="small"
            sx={{ marginLeft: "auto", marginRight: "auto" }}
            data-testid="Table-Pagination" // tests cases
          />
        </Stack>
      )}
    </Stack>
  )
}

export default memo(TableWrapper)
