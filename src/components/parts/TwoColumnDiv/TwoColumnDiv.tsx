export interface ITwoColumnDiv {
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export const TwoColumnDiv = ({ leftElement, rightElement }: ITwoColumnDiv) => {
  return (
    <div className="flex w-full flex-col sm:flex-row gap-10 items-center">
      {leftElement && <div className="w-full">{leftElement}</div>}
      {rightElement && <div className="w-full">{rightElement}</div>}
    </div>
  );
};
