import { VeltCommentsSidebarWireframe } from '@veltdev/react';

import NotionStyleVeltSkeleton from './NotionStyleVeltSkeleton';

const VeltCommentsSidebarSkeleton = () => {
  return (
    <VeltCommentsSidebarWireframe.Skeleton>
      <NotionStyleVeltSkeleton count={5} />
    </VeltCommentsSidebarWireframe.Skeleton>
  );
};

export default VeltCommentsSidebarSkeleton;
