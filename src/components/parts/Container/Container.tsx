export interface IContainer {
  children: React.ReactNode;
  additionalClassName?: string;
}

export const Container = ({ children, additionalClassName }: IContainer) => {
  return <div className={`container mx-auto w-full max-w-5xl px-6 sm:px-0 ${additionalClassName ?? ""}`}>{children}</div>;
};
