import { Sort as ISort } from '@/models/sort'
import { Sort } from '@mui/icons-material'
import { Box, MenuItem, Select } from '@mui/material'

interface Props {
  sortId: string
  sorts: ISort[]
  onSortClick: (sortId: string) => void
}

function SortControls({ sortId, sorts, onSortClick }: Props) {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Box display="flex" alignItems="center" gap={1}>
        <Sort />
        <Select
          size="small"
          value={sortId}
          onChange={(e) => onSortClick(e.target.value)}
          sx={{ minWidth: 150 }}
        >
          {sorts.map(({ id, label }) => (
            <MenuItem value={id}>{label}</MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  )
}

export default SortControls
