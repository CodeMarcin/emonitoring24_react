export interface ITwoColumnDiv {
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export const TwoColumnDiv = ({ leftElement, rightElement }: ITwoColumnDiv) => {
  return (
    <div className="flex w-full flex-col items-center gap-6 sm:flex-row">
      {leftElement && <div className="relative w-full ">{leftElement}</div>}
      {rightElement && <div className="relative w-full">{rightElement}</div>}
    </div>
  );
};
