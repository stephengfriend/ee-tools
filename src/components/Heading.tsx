import cx from 'classnames'

export const H1: React.FunctionComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, children, ...props }) => {
  return (
    <h1 className={cx('text-5xl', className)} {...props}>
      {children}
    </h1>
  )
}

export const H2: React.FunctionComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, children, ...props }) => {
  return (
    <h2 className={cx('text-3xl', className)} {...props}>
      {children}
    </h2>
  )
}

export const H3: React.FunctionComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, children, ...props }) => {
  return (
    <h3 className={cx('text-2xl', className)} {...props}>
      {children}
    </h3>
  )
}


const Heading = { H1, H2, H3 }

export default Heading
