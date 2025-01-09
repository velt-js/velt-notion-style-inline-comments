import { VeltConfirmDialogWireframe } from '@veltdev/react';

const VeltConfirmDialogReply = () => {
  return (
    <VeltConfirmDialogWireframe variant="reply">
      <VeltConfirmDialogWireframe.Title>Delete comment?</VeltConfirmDialogWireframe.Title>
      <div
        className="flex items-center box-border gap-1 justify-end w-full"
      >
        <VeltConfirmDialogWireframe.RejectButton>Cancel</VeltConfirmDialogWireframe.RejectButton>
        <VeltConfirmDialogWireframe.ApproveButton>Delete</VeltConfirmDialogWireframe.ApproveButton>
      </div>
    </VeltConfirmDialogWireframe>
  );
};

export default VeltConfirmDialogReply;