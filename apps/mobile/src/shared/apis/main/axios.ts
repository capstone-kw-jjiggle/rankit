import { client } from '../client';
import { GetUserGradeList, GetUserListParams } from './types';

const MAIN_URL = {
  GET_USER_LIST: '/mainPage/users',
  GET_USER_GRADE_LIST: (grade: string) => `/mainPage/${grade}/users`,
};

export const getUserList = async ({ page, keyword }: GetUserListParams) => {
  const response = await client.get(MAIN_URL.GET_USER_LIST, {
    params: { page, ...(keyword ? { searchedname: keyword } : {}) },
  });
  return response;
};

export const getUserGradeList = async ({
  grade,
  page,
}: GetUserGradeList.Params): Promise<GetUserGradeList.Res> => {
  const response = await client.get(MAIN_URL.GET_USER_GRADE_LIST(grade), {
    params: { page },
  });
  return response.data;
};
