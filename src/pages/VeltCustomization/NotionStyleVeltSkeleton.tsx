const NotionStyleVeltSkeletonItem = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <div className="shine h-6 w-[27px] rounded-xl" />
        <div className="flex w-full flex-col gap-2">
          <div className="shine h-6 w-[45px] rounded-md" />
          <div className="shine h-[18px] w-[127px] rounded-md" />
          <div className="shine h-[75px] w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

const NotionStyleVeltSkeleton = ({ count }: { count: number }) => {
  return (
    <div className="mx-auto flex w-[359px] flex-col gap-4 overflow-hidden box-border p-7">
      {Array.from({ length: count }).map((_, index) => (
        <NotionStyleVeltSkeletonItem key={index} />
      ))}
    </div>
  );
};

export default NotionStyleVeltSkeleton;