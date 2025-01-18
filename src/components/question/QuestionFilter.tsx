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
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'

interface Category {
  name: string
  count: number
}

interface Tag {
  name: string
  count?: number
}

interface QuestionFilterProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  showAnswered: 'all' | 'answered' | 'unanswered'
  onAnsweredStatusChange: (value: 'all' | 'answered' | 'unanswered') => void
  categories: Category[]
  selectedCategories: string[]
  onCategoryChange: (categories: string[]) => void
  tags: Tag[]
  selectedTags: string[]
  onTagChange: (tags: string[]) => void
  onClearFilters: () => void
  className?: string
  sx?: object
}

function QuestionFilter({
  searchTerm,
  onSearchChange,
  showAnswered,
  onAnsweredStatusChange,
  categories,
  selectedCategories,
  onCategoryChange,
  tags,
  selectedTags,
  onTagChange,
  onClearFilters,
  className,
  sx,
}: QuestionFilterProps) {
  const handleCategoryToggle = (category: string, checked: boolean) => {
    if (checked) {
      onCategoryChange([...selectedCategories, category])
    } else {
      onCategoryChange(selectedCategories.filter((cat) => cat !== category))
    }
  }

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagChange(selectedTags.filter((t) => t !== tag))
    } else {
      onTagChange([...selectedTags, tag])
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
          <TextField
            fullWidth
            size="small"
            placeholder="Search questions..."
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
          <Typography variant="subtitle1" gutterBottom>
            Status
          </Typography>
          <RadioGroup
            value={showAnswered}
            onChange={(e) =>
              onAnsweredStatusChange(
                e.target.value as 'all' | 'answered' | 'unanswered',
              )
            }
            sx={{ mb: 3 }}
          >
            <FormControlLabel
              value="all"
              control={<Radio size="small" />}
              label="All Questions"
            />
            <FormControlLabel
              value="answered"
              control={<Radio size="small" />}
              label="Answered"
            />
            <FormControlLabel
              value="unanswered"
              control={<Radio size="small" />}
              label="Unanswered"
            />
          </RadioGroup>
          <Typography variant="subtitle1" gutterBottom>
            Course Category
          </Typography>
          <FormGroup sx={{ mb: 3 }}>
            {categories.map((category) => (
              <FormControlLabel
                key={category.name}
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
          <Typography variant="subtitle1" gutterBottom>
            Tags
          </Typography>
          <Box sx={{ mb: 3 }}>
            {tags.map((tag) => (
              <Chip
                key={tag.name}
                label={tag.name}
                size="small"
                onClick={() => handleTagToggle(tag.name)}
                sx={{
                  m: 0.5,
                  bgcolor: selectedTags.includes(tag.name)
                    ? 'primary.main'
                    : 'default',
                  color: selectedTags.includes(tag.name) ? 'white' : 'inherit',
                  '&:hover': {
                    bgcolor: selectedTags.includes(tag.name)
                      ? 'primary.dark'
                      : 'action.hover',
                  },
                }}
              />
            ))}
          </Box>
          <Button variant="outlined" fullWidth onClick={onClearFilters}>
            Clear All Filters
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default QuestionFilter
