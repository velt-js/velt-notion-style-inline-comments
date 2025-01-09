import { VeltWireframe } from '@veltdev/react';

import VeltCommentDialog from './VeltCommentDialog';
import VeltCommentDialogComposer from './VeltCommentDialogComposer';
import VeltCommentDialogThreadCardOptions from './VeltCommentDialogThreadCardOptions';
import VeltCommentsSidebarEmptyPlaceholder from './VeltCommentsSidebarEmptyPlaceholder';
import VeltCommentsSidebarSkeleton from './VeltCommentsSidebarSkeleton';
import VeltConfirmDialogComment from './VeltConfirmDialogComment';
import VeltConfirmDialogReply from './VeltConfirmDialogReply';

const VeltCustomization = () => {
  return (
    <VeltWireframe>
      <VeltCommentDialogComposer />
      <VeltCommentDialog />
      <VeltCommentsSidebarSkeleton />
      <VeltCommentsSidebarEmptyPlaceholder />
      <VeltConfirmDialogComment />
      <VeltConfirmDialogReply />
      <VeltCommentDialogThreadCardOptions />
    </VeltWireframe>
  );
};

export default VeltCustomization;
