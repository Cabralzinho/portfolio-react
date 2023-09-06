export const ButtonPrimary = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button {...rest} className={`${className} bg-indigo-600/90 hover:bg-indigo-600 px-6 py-3 rounded-full disabled:opacity-10 text-white transition-all flex justify-center`}>{children}</button>
  )
}