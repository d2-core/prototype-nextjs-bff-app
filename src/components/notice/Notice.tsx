import { ReactNode, useState } from 'react'
import { Box, Grid, Divider, Card, CardContent } from '@mui/material'
import EmptyCard from '../shared/EmptyCard'
import { useRouter } from 'next/router'
import NoticeListItem from './NoticeListItem'
import { Notice as INotice } from '@/models/notice'
import NoticeFilter, { FilterState } from './NoticeFilter'
import ListDirection from '../shared/ListDirection'

interface Props {
  notices: INotice[]
  title?: ReactNode
}
function Notice({ notices, title }: Props) {
  const route = useRouter()

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    categories: [],
    onlyImportant: false,
  })

  const availableCategories = ['System', 'Update', 'General', 'Event']

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({ ...prev, search: value }))
  }

  const handleCategoryToggle = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }))
  }

  const handleImportantToggle = () => {
    setFilters((prev) => ({ ...prev, onlyImportant: !prev.onlyImportant }))
  }

  const handleResetFilters = () => {
    setFilters({
      search: '',
      categories: [],
      onlyImportant: false,
    })
  }

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      notice.content.toLowerCase().includes(filters.search.toLowerCase())
    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(notice.category)
    const matchesImportant = !filters.onlyImportant || notice.isImportant
    return matchesSearch && matchesCategory && matchesImportant
  })

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <NoticeFilter
            filters={filters}
            availableCategories={availableCategories}
            onSearchChange={handleSearchChange}
            onCategoryToggle={handleCategoryToggle}
            onImportantToggle={handleImportantToggle}
            onResetFilters={handleResetFilters}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          {title && <ListDirection title={title} length={notices.length} />}
          <Card>
            <CardContent>
              {filteredNotices.map((notice, index) => (
                <Grid item xs={12} md={12} key={notice.id}>
                  <NoticeListItem notice={notice} />
                  {index !== notices.length - 1 ? (
                    <Divider sx={{ my: 3 }} />
                  ) : null}
                </Grid>
              ))}
              {filteredNotices.length === 0 && (
                <EmptyCard title="No notices found matching your filters." />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Notice
