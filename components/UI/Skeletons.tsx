const ImageSkeleton = ({ height }: { height?: number }) => {
  return (
    <div role="status" className="animate-pulse">
      <div
        className={`h-[${
          height || '200'
        }px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4`}
      ></div>
    </div>
  );
};

export default ImageSkeleton;
