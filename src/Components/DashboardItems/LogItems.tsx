//@ts-ignore
import { React } from "react";

interface LogItemsProps {
  date: string;
  body: string;
}

export const LogItems = ({ date, body }: LogItemsProps) => {
  return (
    <div className="w-full h-16 rounded bg-neutral-100 p-2 flex flex-col items-center px-4">
      <div className="flex flex-col items-start gap-1 w-full h-full">
        <h1 className="text-sm">{date}</h1>
        <h1 className="text-md">{body}</h1>
      </div>
    </div>
  );
};
