import { FilterList, Search } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Slider,
  TextField,
  Typography,
} from '@mui/material'

interface Category {
  id: string
  name: string
  count: number
}

interface ReviewFilterProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  ratingFilter: number[]
  onRatingChange: (value: number[]) => void
  categories: Category[]
  selectedCategories: string[]
  onCategoryChange: (categories: string[]) => void
  sortBy: string
  onSortChange: (value: string) => void
  onClearFilters: () => void
  className?: string
  sx?: object
}

function ReviewFilter({
  searchTerm,
  onSearchChange,
  ratingFilter,
  onRatingChange,
  categories,
  selectedCategories,
  onCategoryChange,
  sortBy,
  onSortChange,
  onClearFilters,
  className,
  sx,
}: ReviewFilterProps) {
  const handleCategoryToggle = (category: string, checked: boolean) => {
    if (checked) {
      onCategoryChange([...selectedCategories, category])
    } else {
      onCategoryChange(selectedCategories.filter((cat) => cat !== category))
    }
  }

  return (
    <Box sx={{ position: 'sticky', top: 24, ...sx }} className={className}>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={3}>
            <FilterList />
            <Typography variant="h6">Filters</Typography>
          </Box>

          {/* Search Filter */}
          <TextField
            fullWidth
            size="small"
            placeholder="Search reviews..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          {/* Rating Filter */}
          <Typography variant="subtitle1" gutterBottom>
            Rating
          </Typography>
          <Box sx={{ px: 1, mb: 3 }}>
            <Slider
              value={ratingFilter}
              onChange={(_, newValue) => onRatingChange(newValue as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={5}
              step={0.5}
              marks={[
                { value: 0, label: '0' },
                { value: 5, label: '5' },
              ]}
            />
          </Box>

          {/* Category Filter */}
          <Typography variant="subtitle1" gutterBottom>
            Course Category
          </Typography>
          <FormGroup sx={{ mb: 3 }}>
            {categories.map((category) => (
              <FormControlLabel
                key={category.id}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category.name)}
                    onChange={(e) =>
                      handleCategoryToggle(category.name, e.target.checked)
                    }
                    size="small"
                  />
                }
                label={
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">{category.name}</Typography>
                    <Chip
                      size="small"
                      label={category.count}
                      sx={{ height: 20 }}
                    />
                  </Box>
                }
              />
            ))}
          </FormGroup>

          {/* Clear Filters Button */}
          <Button variant="outlined" fullWidth onClick={onClearFilters}>
            Clear All Filters
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ReviewFilter
