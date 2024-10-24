import { client } from '../client';

const SCHOOL_URL = {
  GET_SCHOOL_LIST: '/schoolRank/schoolList',
};

export const getSchoolList = async (page, keyword) => {
  const response = await client.get(SCHOOL_URL.GET_SCHOOL_LIST, {
    params: { page, ...(keyword ? { searchedSchoolName: keyword } : {}) },
  });
  return response;
};
