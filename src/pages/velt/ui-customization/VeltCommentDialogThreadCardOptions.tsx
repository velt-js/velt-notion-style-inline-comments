import { VeltButtonWireframe, VeltCommentDialogWireframe } from '@veltdev/react';
import NotionStyleVeltButton from './NotionStyleVeltButton';
import {Button, ButtonGroup} from "@heroui/button";

const VeltOptionsTrigger = () => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15.6" cy="10.0001" r="1.4" transform="rotate(90 15.6 10.0001)" fill="#949DAD" />
    <circle cx="10" cy="10.0001" r="1.4" transform="rotate(90 10 10.0001)" fill="#949DAD" />
    <circle cx="4.40005" cy="10.0001" r="1.4" transform="rotate(90 4.40005 10.0001)" fill="#949DAD" />
  </svg>;
};

const NotionStyleVeltThreadCardOptionItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="notion-style-thread-card-option-item rounded-md text-gray-600 cursor-pointer font-inter text-sm font-medium leading-4 p-1.5 hover:bg-gray-200 w-full text-left"
    >
      {children}
    </div>
  );
};

const VeltCommentDialogThreadCardOptions = () => {
  return (
    <VeltCommentDialogWireframe.ThreadCard.Options>
      <VeltCommentDialogWireframe.ThreadCard.Options.Trigger>
        <NotionStyleVeltButton>
          <VeltOptionsTrigger />
        </NotionStyleVeltButton>
      </VeltCommentDialogWireframe.ThreadCard.Options.Trigger>
      <VeltCommentDialogWireframe.ThreadCard.Options.Content>
        <div
          className="notion-style-velt-thread-card-options-content text-gray-600 font-inter text-sm font-medium leading-4 p-1.5 flex flex-col"
        >
          <VeltButtonWireframe id="option-1" type="button">
            <NotionStyleVeltThreadCardOptionItem>Option 1</NotionStyleVeltThreadCardOptionItem>
          </VeltButtonWireframe>
          <VeltButtonWireframe id="option-2" type="button">
            <Button color="primary">Option 2</Button>
          </VeltButtonWireframe>
          <VeltCommentDialogWireframe.ThreadCard.Options.Content.Edit>
            <NotionStyleVeltThreadCardOptionItem>Edit</NotionStyleVeltThreadCardOptionItem>
          </VeltCommentDialogWireframe.ThreadCard.Options.Content.Edit>
          <VeltCommentDialogWireframe.CopyLink>
            <NotionStyleVeltThreadCardOptionItem>Copy Link</NotionStyleVeltThreadCardOptionItem>
          </VeltCommentDialogWireframe.CopyLink>
          <VeltCommentDialogWireframe.ThreadCard.Options.Content.Delete>
            <NotionStyleVeltThreadCardOptionItem>Delete</NotionStyleVeltThreadCardOptionItem>
          </VeltCommentDialogWireframe.ThreadCard.Options.Content.Delete>
        </div>
      </VeltCommentDialogWireframe.ThreadCard.Options.Content>
    </VeltCommentDialogWireframe.ThreadCard.Options>
  );
};

export default VeltCommentDialogThreadCardOptions;