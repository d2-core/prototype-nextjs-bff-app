import { useState } from 'react'
import { Box, Grid, Divider, Card, CardContent } from '@mui/material'
import EmptyCard from '../shared/EmptyCard'
import { useRouter } from 'next/router'
import NoticeListItem from './NoticeListItem'
import { Notice as INotice } from '@/models/notice'
import NoticeFilter, { FilterState } from './NoticeFilter'

function Notice() {
  const route = useRouter()
  const [notices, setNotices] = useState<INotice[]>([
    {
      id: 1,
      title: 'System Maintenance Notice',
      content: `We will be performing scheduled system maintenance to improve our services.
      During this time, all systems will be unavailable.
      Maintenance Schedule:
      - Start: January 20, 2024 2:00 AM EST
      - End: January 20, 2024 4:00 AM EST
      What to expect:
      1. Complete system downtime
      2. Automatic logout of all users
      3. Temporary service interruption
      Please save your work and log out before the maintenance begins.
      We apologize for any inconvenience this may cause.`,
      category: 'System',
      date: '2024-01-18',
      isImportant: true,
      author: 'System Admin',
      views: 245,
      attachments: [
        { name: 'maintenance_schedule.pdf', size: '524 KB' },
        { name: 'system_updates.docx', size: '128 KB' },
      ],
      isRead: false,
    },
  ])

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
