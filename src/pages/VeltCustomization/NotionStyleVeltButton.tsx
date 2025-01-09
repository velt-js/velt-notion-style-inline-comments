import { ReactNode } from 'react';

interface NotionStyleVeltButtonProps {
  children: ReactNode;
  className?: string;
}

const NotionStyleVeltButton = ({
  children,
  className = '',
  ...props
}: NotionStyleVeltButtonProps) => {
  return (
    <div
      className={`flex text-gray-500 cursor-pointer hover:bg-gray-200 hover:rounded-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default NotionStyleVeltButton;
