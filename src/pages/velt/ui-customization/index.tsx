import { VeltWireframe } from '@veltdev/react';

import VeltCommentDialog from './VeltCommentDialog';
import VeltCommentDialogComposer from './VeltCommentDialogComposer';
import VeltCommentDialogThreadCardOptions from './VeltCommentDialogThreadCardOptions';
import VeltCommentsSidebarEmptyPlaceholder from './VeltCommentsSidebarEmptyPlaceholder';
import VeltCommentsSidebarSkeleton from './VeltCommentsSidebarSkeleton';

const VeltCustomization = () => {
  return (
    <VeltWireframe>
      <VeltCommentDialogComposer />
      <VeltCommentDialog />
      <VeltCommentsSidebarSkeleton />
      <VeltCommentsSidebarEmptyPlaceholder />
      <VeltCommentDialogThreadCardOptions />
    </VeltWireframe>
  );
};

export default VeltCustomization;
