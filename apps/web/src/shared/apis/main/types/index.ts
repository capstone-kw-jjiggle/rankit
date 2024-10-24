export interface GetUserListParams {
  page?: number;
  keyword?: string;
}

export namespace GetUserGradeList {
  export interface Params {
    grade: 'PURPLE' | 'GREY' | 'RED' | 'BLUE' | 'GREEN' | 'YELLOW';
    page: number;
  }

  interface User {
    profileImg?: string;
    username: string;
    userscore: number;
    userRank: number;
  }

  export interface Res {
    userList: User[];
    currentPage: number;
    startPage: number;
    endPage: number;
    totalPages: number;
  }
}
