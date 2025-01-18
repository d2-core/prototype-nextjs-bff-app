interface Props {
  courseId: number
}
function StudentClassRoom({ courseId }: Props) {
  return <div>{`StudentCourseDetail: ${courseId}`}</div>
}

export default StudentClassRoom
