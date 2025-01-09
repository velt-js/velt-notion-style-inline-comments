import { VeltCommentDialogWireframe, VeltData, VeltIf } from '@veltdev/react';
import NotionStyleVeltButton from './NotionStyleVeltButton';

const VeltLayerIcon = () => {
  return <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.5" width="10" height="10" rx="2" fill="#7092C2" />
    <path
      d="M3.125 9.25C2.43835 9.25 1.875 8.68665 1.875 8C1.875 7.42178 2.27632 6.93575 2.8125 6.79517V6.4375V4.20483C2.27632 4.06425 1.875 3.57822 1.875 3C1.875 2.31335 2.43835 1.75 3.125 1.75C3.81165 1.75 4.375 2.31335 4.375 3C4.375 3.57822 3.97368 4.06425 3.4375 4.20483V5.43958C3.48417 5.41362 3.53224 5.38987 3.58093 5.36755C3.98901 5.18052 4.47185 5.09571 4.93652 4.9989C5.4012 4.90209 5.84511 4.79268 6.13464 4.62781C6.34474 4.50817 6.47437 4.38984 6.53015 4.19507C6.0105 4.04345 5.625 3.56641 5.625 3C5.625 2.31335 6.18835 1.75 6.875 1.75C7.56165 1.75 8.125 2.31335 8.125 3C8.125 3.58942 7.70885 4.08522 7.15698 4.2146C7.06983 4.64774 6.78694 4.97544 6.44348 5.17102C6.02989 5.40654 5.5363 5.51197 5.06348 5.61047C4.59065 5.70898 4.13599 5.79995 3.84094 5.93518C3.69342 6.00279 3.59055 6.07855 3.52966 6.1543C3.46877 6.23005 3.4375 6.30469 3.4375 6.4375V6.79517C3.97368 6.93575 4.375 7.42178 4.375 8C4.375 8.68665 3.81165 9.25 3.125 9.25ZM3.125 8.625C3.47388 8.625 3.75 8.34888 3.75 8C3.75 7.66077 3.48824 7.39276 3.15308 7.37805C3.14212 7.37904 3.13112 7.37945 3.12012 7.37927C3.11217 7.37917 3.10423 7.37876 3.09631 7.37805C2.76145 7.39306 2.5 7.66098 2.5 8C2.5 8.34888 2.77612 8.625 3.125 8.625ZM3.09692 3.62195C3.11581 3.62023 3.1348 3.62023 3.15369 3.62195C3.48855 3.60694 3.75 3.33902 3.75 3C3.75 2.65112 3.47388 2.375 3.125 2.375C2.77612 2.375 2.5 2.65112 2.5 3C2.5 3.33923 2.76176 3.60724 3.09692 3.62195ZM6.84692 3.62195C6.86581 3.62023 6.8848 3.62023 6.90369 3.62195C7.23855 3.60694 7.5 3.33902 7.5 3C7.5 2.65112 7.22388 2.375 6.875 2.375C6.52612 2.375 6.25 2.65112 6.25 3C6.25 3.33923 6.51176 3.60724 6.84692 3.62195Z"
      fill="white"
    />
  </svg>;
};

const VeltReactionTool = () => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 3C6.14092 3 3 6.14092 3 10C3 13.8591 6.14092 17 10 17C13.8591 17 17 13.8591 17 10C17 6.14092 13.8591 3 10 3ZM10 4.16667C13.2286 4.16667 15.8333 6.77143 15.8333 10C15.8333 13.2286 13.2286 15.8333 10 15.8333C6.77143 15.8333 4.16667 13.2286 4.16667 10C4.16667 6.77143 6.77143 4.16667 10 4.16667ZM7.375 8.83333C7.14294 8.83333 6.92038 8.92552 6.75628 9.08961C6.59219 9.25371 6.5 9.47627 6.5 9.70833C6.5 9.9404 6.59219 10.163 6.75628 10.3271C6.92038 10.4911 7.14294 10.5833 7.375 10.5833C7.60706 10.5833 7.82962 10.4911 7.99372 10.3271C8.15781 10.163 8.25 9.9404 8.25 9.70833C8.25 9.47627 8.15781 9.25371 7.99372 9.08961C7.82962 8.92552 7.60706 8.83333 7.375 8.83333ZM12.625 8.83333C12.3929 8.83333 12.1704 8.92552 12.0063 9.08961C11.8422 9.25371 11.75 9.47627 11.75 9.70833C11.75 9.9404 11.8422 10.163 12.0063 10.3271C12.1704 10.4911 12.3929 10.5833 12.625 10.5833C12.8571 10.5833 13.0796 10.4911 13.2437 10.3271C13.4078 10.163 13.5 9.9404 13.5 9.70833C13.5 9.47627 13.4078 9.25371 13.2437 9.08961C13.0796 8.92552 12.8571 8.83333 12.625 8.83333ZM8.24658 12.3288C8.12561 12.3356 8.00976 12.3798 7.9151 12.4555C7.82045 12.5311 7.75169 12.6343 7.71837 12.7508C7.68505 12.8673 7.68883 12.9913 7.72918 13.1055C7.76952 13.2198 7.84444 13.3186 7.94352 13.3883C8.4127 13.7293 9.11528 14.0833 10 14.0833C10.8847 14.0833 11.5876 13.7296 12.0565 13.3883C12.1184 13.3432 12.1709 13.2864 12.2109 13.221C12.2509 13.1556 12.2776 13.083 12.2895 13.0073C12.3014 12.9316 12.2983 12.8543 12.2804 12.7797C12.2624 12.7052 12.2299 12.635 12.1848 12.5731C12.1397 12.5111 12.0828 12.4586 12.0174 12.4187C11.952 12.3787 11.8794 12.352 11.8037 12.3401C11.7279 12.3282 11.6506 12.3314 11.5761 12.3494C11.5016 12.3674 11.4314 12.3998 11.3695 12.445C11.0369 12.687 10.5736 12.9167 10 12.9167C9.42639 12.9167 8.96288 12.6873 8.62939 12.445C8.53534 12.3744 8.42216 12.3339 8.30469 12.3288C8.28533 12.3278 8.26594 12.3278 8.24658 12.3288Z"
      fill="#949DAD"
    />
  </svg>;
};

const VeltResolveButton = () => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.95335 12.3333C9.12824 12.3325 9.29584 12.2631 9.42001 12.1399L12.7533 8.80659C12.8158 8.74461 12.8654 8.67088 12.8993 8.58964C12.9331 8.5084 12.9505 8.42126 12.9505 8.33325C12.9505 8.24524 12.9331 8.15811 12.8993 8.07687C12.8654 7.99563 12.8158 7.92189 12.7533 7.85992L8.95335 12.3333ZM8.95335 12.3333C8.86561 12.3338 8.77863 12.3169 8.69741 12.2838C8.61618 12.2506 8.54231 12.2017 8.48001 12.1399L8.95335 12.3333ZM8.59979 11.0801L8.95376 11.4341L9.30731 11.0797L12.1658 8.21452C12.166 8.21436 12.1662 8.21419 12.1663 8.21403C12.1975 8.18329 12.2396 8.16606 12.2833 8.16606C12.3274 8.16606 12.3696 8.18348 12.4008 8.21452L12.4012 8.21492C12.4169 8.23041 12.4293 8.24885 12.4377 8.26916C12.4462 8.28947 12.4505 8.31125 12.4505 8.33325C12.4505 8.35525 12.4462 8.37704 12.4377 8.39735C12.4293 8.41766 12.4169 8.43609 12.4012 8.45158L12.3998 8.45303L9.06791 11.7849C9.06773 11.7851 9.06756 11.7853 9.06738 11.7854C9.03639 11.8159 8.99472 11.8331 8.95124 11.8333L8.95046 11.8333C8.92852 11.8334 8.90678 11.8292 8.88647 11.8209C8.86649 11.8127 8.84829 11.8008 8.83288 11.7857C8.83263 11.7854 8.83237 11.7852 8.83212 11.7849L7.26765 10.2138L7.25365 10.1997L7.23857 10.1868C7.22113 10.1719 7.20696 10.1535 7.19695 10.1328L6.74686 10.3506L7.19695 10.1328C7.18695 10.1121 7.18133 10.0896 7.18044 10.0667C7.17956 10.0437 7.18342 10.0208 7.1918 9.99943C7.20018 9.97804 7.21289 9.95861 7.22913 9.94237L6.87558 9.58882L7.22913 9.94237C7.24537 9.92613 7.2648 9.91342 7.28619 9.90504C7.30757 9.89666 7.33046 9.89279 7.35342 9.89368C7.37637 9.89457 7.39889 9.90019 7.41957 9.91019C7.44025 9.9202 7.45863 9.93437 7.47358 9.95181L7.48614 9.96648L7.49979 9.98014L8.59979 11.0801ZM6.574 4.87252C7.5881 4.19492 8.78036 3.83325 10 3.83325C10.8098 3.83325 11.6117 3.99276 12.3599 4.30266C13.1081 4.61257 13.7879 5.0668 14.3605 5.63943C14.9331 6.21205 15.3874 6.89186 15.6973 7.64004C16.0072 8.38821 16.1667 9.1901 16.1667 9.99992C16.1667 11.2196 15.805 12.4118 15.1274 13.4259C14.4498 14.44 13.4867 15.2304 12.3599 15.6972C11.2331 16.1639 9.99317 16.286 8.79696 16.0481C7.60074 15.8102 6.50195 15.2228 5.63952 14.3604C4.7771 13.498 4.18978 12.3992 3.95184 11.203C3.7139 10.0068 3.83602 8.76685 4.30276 7.64004C4.7695 6.51323 5.55989 5.55012 6.574 4.87252ZM6.75919 14.8502C7.71847 15.4911 8.84629 15.8333 10 15.8333C11.5471 15.8333 13.0308 15.2187 14.1248 14.1247C15.2188 13.0307 15.8333 11.547 15.8333 9.99992C15.8333 8.84619 15.4912 7.71838 14.8503 6.75909C14.2093 5.79981 13.2982 5.05213 12.2323 4.61062C11.1664 4.16911 9.99354 4.05359 8.86199 4.27867C7.73043 4.50375 6.69103 5.05932 5.87522 5.87513C5.05942 6.69094 4.50385 7.73034 4.27877 8.86189C4.05369 9.99345 4.1692 11.1663 4.61072 12.2322C5.05223 13.2981 5.7999 14.2092 6.75919 14.8502Z"
      fill="#949DAD"
      stroke="#949DAD"
    />
  </svg>;
};

const VeltUnreadDot = () => {
  return <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2" cy="2" r="2" fill="#18A0FB" />
  </svg>;
};

const VeltUnresolveButton = () => {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 8H10M2 8C2 8.78793 2.15519 9.56813 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2427C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56813 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2427 12.2427C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56813 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2427 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56813 2.15519 8.78793 2 8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8Z"
      stroke="#949DAD"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
};

const VeltCommentDialog = () => {
  return (
    <VeltCommentDialogWireframe>
      <div className="flex flex-col items-start bg-white rounded-md">
        <VeltCommentDialogWireframe.Body>
          <VeltCommentDialogWireframe.Threads>
            <VeltCommentDialogWireframe.ThreadCard>
              <div
                className="notion-style-velt-thread-card w-full box-border flex flex-col"
              >
                <div className="flex items-center justify-between self-stretch gap-1.5">
                  <div className="flex items-center self-stretch gap-1.5">
                    <div className="h-1 w-1">
                      <VeltCommentDialogWireframe.ThreadCard.Unread>
                        <VeltUnreadDot />
                      </VeltCommentDialogWireframe.ThreadCard.Unread>
                    </div>
                    <VeltCommentDialogWireframe.ThreadCard.Avatar />
                    <VeltCommentDialogWireframe.ThreadCard.Name />
                    <VeltCommentDialogWireframe.ThreadCard.Time />
                    <VeltCommentDialogWireframe.ThreadCard.Draft />
                    <VeltIf condition="{inlineCommentSectionMode}">
                      <div className="notion-style-velt-context-data-container flex items-center text-gray-500 font-inter text-xs font-semibold leading-4 py-1 flex-1 gap-1 -ml-[3px] pl-0">
                        <span className="font-medium">in</span>
                        <VeltLayerIcon />
                        <VeltData path="annotation.context.layer.name" />
                      </div>
                    </VeltIf>
                    <VeltIf condition="{comment.isEdited}">
                      <div className="flex items-center text-gray-500 font-inter text-xs font-medium gap-0.5">
                        (edited)
                      </div>
                    </VeltIf>
                  </div>
                  <div className="notion-style-velt-thread-card-actions flex items-center bg-carbon-0 rounded-md justify-end opacity-0 px-1 py-0.5 gap-0.5">
                    <VeltCommentDialogWireframe.ThreadCard.ReactionTool>
                      <NotionStyleVeltButton>
                        <VeltReactionTool />
                      </NotionStyleVeltButton>
                    </VeltCommentDialogWireframe.ThreadCard.ReactionTool>
                    <VeltIf condition="{i} === 0">
                      <VeltCommentDialogWireframe.ResolveButton>
                        <NotionStyleVeltButton>
                          <VeltResolveButton />
                        </NotionStyleVeltButton>
                      </VeltCommentDialogWireframe.ResolveButton>
                      <VeltCommentDialogWireframe.UnresolveButton>
                        <NotionStyleVeltButton className="p-0.5">
                          <VeltUnresolveButton />
                        </NotionStyleVeltButton>
                      </VeltCommentDialogWireframe.UnresolveButton>
                    </VeltIf>
                    <VeltCommentDialogWireframe.ThreadCard.Options />
                  </div>
                </div>
                <VeltIf condition="{sidebarMode}">
                  <div className="notion-style-velt-context-data-container flex items-center text-gray-500 font-inter text-xs font-semibold leading-4 py-1 pl-9 flex-1 gap-1">
                    <VeltLayerIcon />
                    <VeltData path="annotation.context.layer.name" />
                  </div>
                </VeltIf>
                <VeltCommentDialogWireframe.ThreadCard.Message />
                <VeltCommentDialogWireframe.ThreadCard.Reactions />
                <VeltCommentDialogWireframe.ThreadCard.Attachments />
              </div>
            </VeltCommentDialogWireframe.ThreadCard>
            <VeltCommentDialogWireframe.MoreReply />
          </VeltCommentDialogWireframe.Threads>
          <VeltCommentDialogWireframe.ToggleReply />
        </VeltCommentDialogWireframe.Body>
        <VeltCommentDialogWireframe.Composer />
      </div>
    </VeltCommentDialogWireframe>
  );
};

export default VeltCommentDialog;