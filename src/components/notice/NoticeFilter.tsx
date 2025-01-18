import { Refresh, Search } from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'

export interface FilterState {
  search: string
  categories: string[]
  onlyImportant: boolean
}

interface NoticeFilterProps {
  filters: FilterState
  availableCategories: string[]
  onSearchChange: (value: string) => void
  onCategoryToggle: (category: string) => void
  onImportantToggle: () => void
  onResetFilters: () => void
}

function NoticeFilter({
  filters,
  availableCategories,
  onSearchChange,
  onCategoryToggle,
  onImportantToggle,
  onResetFilters,
}: NoticeFilterProps) {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h6">Filters</Typography>
          <IconButton onClick={onResetFilters} size="small">
            <Refresh />
          </IconButton>
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search notices..."
          value={filters.search}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Categories
        </Typography>
        <FormGroup>
          {availableCategories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={filters.categories.includes(category)}
                  onChange={() => onCategoryToggle(category)}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>

        <Divider sx={{ my: 2 }} />

        <FormControlLabel
          control={
            <Checkbox
              checked={filters.onlyImportant}
              onChange={onImportantToggle}
            />
          }
          label="Important notices only"
        />
      </CardContent>
    </Card>
  )
}

export default NoticeFilter
