export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <main className="flex flex-col items-center justify-center flex-1 px-0 py-20 mx-auto prose lg:prose-xl">
        {children}
      </main>
    </>
  )
}

export default PageLayout
