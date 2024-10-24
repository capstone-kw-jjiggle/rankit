import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getUserGradeList, getUserList } from './axios';
import { GetUserGradeList, GetUserListParams } from './types';

export const useGetUserList = ({ page, keyword }: GetUserListParams) => {
  return useQuery({
    queryKey: ['userList', page, keyword],
    queryFn: () => getUserList({ page, keyword }),
  });
};

export const useGetUserGradeList = ({
  grade,
}: Omit<GetUserGradeList.Params, 'page'>) => {
  return useInfiniteQuery({
    queryKey: ['userGradeList', grade],
    queryFn: ({ pageParam = 1 }) =>
      getUserGradeList({ grade, page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages
        ? lastPage.currentPage + 1
        : null,
    initialPageParam: 1,
  });
};
