import { Search } from '@mui/icons-material'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Rating,
  Select,
  TextField,
  Typography,
} from '@mui/material'

interface CourseFilterProps {
  // 검색어 관련
  searchTerm: string
  onSearchChange: (value: string) => void

  // 레벨 필터 관련
  selectedLevel: string
  onLevelChange: (value: string) => void

  // 카테고리 필터 관련
  selectedCategories: string[]
  onCategoriesChange: (categories: string[]) => void
  allCategories: string[] // 사용 가능한 모든 카테고리 목록

  // 평점 필터 관련
  minRating: number | null
  onRatingChange: (rating: number | null) => void
}

function CourseFilter({
  searchTerm,
  onSearchChange,
  selectedLevel,
  onLevelChange,
  selectedCategories,
  onCategoriesChange,
  allCategories,
  minRating,
  onRatingChange,
}: CourseFilterProps) {
  return (
    <Grid item xs={12} md={3}>
      <Paper
        elevation={2}
        sx={{
          p: 3,
          position: 'sticky',
          top: 16,
          maxHeight: 'calc(100vh - 32px)',
          overflowY: 'auto',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Level</InputLabel>
          <Select
            value={selectedLevel}
            label="Level"
            onChange={(e) => onLevelChange(e.target.value)}
          >
            <MenuItem value="">All Levels</MenuItem>
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="advanced">Advanced</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="subtitle1" gutterBottom>
          Categories
        </Typography>
        <FormGroup sx={{ mb: 3 }}>
          {allCategories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onCategoriesChange([...selectedCategories, category])
                    } else {
                      onCategoriesChange(
                        selectedCategories.filter((item) => item !== category),
                      )
                    }
                  }}
                  size="small"
                />
              }
              label={category}
            />
          ))}
        </FormGroup>

        <Typography variant="subtitle1" gutterBottom>
          Minimum Rating
        </Typography>
        <Rating
          value={minRating}
          onChange={(_, value) => onRatingChange(value)}
          precision={0.5}
        />
      </Paper>
    </Grid>
  )
}

export default CourseFilter
