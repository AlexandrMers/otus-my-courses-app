import { Document } from 'mongodb';

import { Course } from '../../models/schemas/Course';

export const mapCourseToClient = (course: Document & Course) => ({
  id: course.id,
  image: course.image,
  creator: course.creator,
  comments: course.comments,
  lessons: course.lessons,
  description: course.description,
  availableUsers: course.availableUsers,
});
