import cx from 'classnames'

export const Paragraph: React.FunctionComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ className, ...props }) => {
  return <p className={cx('text-base', className)} {...props} />
}

export default Paragraph
