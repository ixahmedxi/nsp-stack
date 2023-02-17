import { FC, PropsWithChildren } from 'react';

export const Typography: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-blue-700 dark:text-pink-500">{children}</p>;
};
