import { CourseModelType, UserModelType } from '../../models';

import { mapCourseToClient } from './mappings';

const hardCodeUserId = '62125a950b0a52679fd1638a';

class CoursesService {
  private userModel: UserModelType;
  private courseModel: CourseModelType;

  constructor({
    userModel,
    courseModel,
  }: {
    userModel: UserModelType;
    courseModel: CourseModelType;
  }) {
    this.userModel = userModel;
    this.courseModel = courseModel;
  }

  public create = async (name: string, description: string) => {
    // TODO - В данном случае достанем реального юзера, чтобы связать документы в БД,
    //  далее он будет доступен из авторизации...
    const user = await this.userModel.findById(hardCodeUserId);

    if (!user) {
      throw Error('Пользователь не найден');
    }

    const createdCourse = await this.courseModel.create({
      name,
      image: '',
      description,
      creator: user.id,
      availableUsers: [user.id],
    });

    const savedCourse = await createdCourse.save();

    user.availableCourses.push(savedCourse.id);
    await user.save();

    return savedCourse;
  };

  public getCourses = async (id: string) => {
    const courses = await this.courseModel.find({
      availableUsers: id,
    });

    return courses.map(mapCourseToClient);
  };
}

export default CoursesService;
