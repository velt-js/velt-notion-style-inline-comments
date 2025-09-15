import { VeltConfirmDialogWireframe } from '@veltdev/react';

const VeltConfirmDialogComment = () => {
  return (
    <VeltConfirmDialogWireframe variant="comment">
      <VeltConfirmDialogWireframe.Title>Delete thread?</VeltConfirmDialogWireframe.Title>
      <VeltConfirmDialogWireframe.Message>
        This message and all replies will be deleted.
      </VeltConfirmDialogWireframe.Message>
      <div
        className="flex items-center box-border gap-1 justify-end w-full"
      >
        <VeltConfirmDialogWireframe.RejectButton>Cancel</VeltConfirmDialogWireframe.RejectButton>
        <VeltConfirmDialogWireframe.ApproveButton>Delete</VeltConfirmDialogWireframe.ApproveButton>
      </div>
    </VeltConfirmDialogWireframe>
  );
};

export default VeltConfirmDialogComment;