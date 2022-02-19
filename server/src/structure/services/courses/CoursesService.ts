class CoursesService {
  public create = async (name: string, description: string) => {
    // TODO - В данном случае достанем реального юзера, чтобы связать документы в БД, далее он будет доступен из авторизации...
    const hardCodeUserId = '6210f86eb5ed14e619db3422';
    // const user = await User.findOne(hardCodeUserId);

    // if (!user) {
    //   throw Error('Пользователь не найден');
    // }

    // const createdCourse = Course.create({
    //   name,
    //   image: '',
    //   description,
    //   creator: user.id,
    //   availableUsers: [user],
    // });

    // return createdCourse.save();

    return Promise.resolve(null);
  };

  public getCourses = async () => {
    try {
      const user = '6210f86eb5ed14e619db3422';

      // return Course.find({ where: { creator: user } });
      return Promise.resolve(null);
    } catch (error) {
      throw Error(error);
    }
  };
}

export default CoursesService;
