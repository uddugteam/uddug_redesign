import { NextPage } from 'next';

export type AppNextPage<T = void> = NextPage<T> & {
  getLayout: (page: NextPage) => JSX.Element;
};
