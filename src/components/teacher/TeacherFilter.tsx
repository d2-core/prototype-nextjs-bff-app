import { Search } from '@mui/icons-material'
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent } from 'react'

interface TeacherFilterProps {
  searchTerm: string
  selectedExpertise: string[]
  minRating: number | null
  allExpertise: string[]
  onSearchChange: (value: string) => void
  onExpertiseChange: (expertise: string[]) => void
  onRatingChange: (rating: number | null) => void
}

function TeacherFilter({
  searchTerm,
  selectedExpertise,
  minRating,
  allExpertise,
  onSearchChange,
  onExpertiseChange,
  onRatingChange,
}: TeacherFilterProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }

  const handleExpertiseChange =
    (exp: string) => (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        onExpertiseChange([...selectedExpertise, exp])
      } else {
        onExpertiseChange(selectedExpertise.filter((item) => item !== exp))
      }
    }

  const handleRatingChange = (
    _: React.SyntheticEvent,
    value: number | null,
  ) => {
    onRatingChange(value)
  }

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
          placeholder="Search teachers..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <Typography variant="subtitle1" gutterBottom>
          Expertise
        </Typography>
        <FormGroup sx={{ mb: 3 }}>
          {allExpertise.map((exp) => (
            <FormControlLabel
              key={exp}
              control={
                <Checkbox
                  checked={selectedExpertise.includes(exp)}
                  onChange={handleExpertiseChange(exp)}
                  size="small"
                />
              }
              label={exp}
            />
          ))}
        </FormGroup>

        <Typography variant="subtitle1" gutterBottom>
          Minimum Rating
        </Typography>
        <Rating
          value={minRating}
          onChange={handleRatingChange}
          precision={0.5}
        />
      </Paper>
    </Grid>
  )
}

export default TeacherFilter
