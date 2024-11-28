"use client";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[200px]">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent animate-spin" />
        <div className="absolute top-2 left-2 w-20 h-20 rounded-full border-4 border-t-transparent border-r-blue-500 border-b-transparent border-l-purple-500 animate-spin-slow" />
      </div>
    </div>
  );
};
