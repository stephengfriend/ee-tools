import cx from 'classnames'
import styles from './Card.module.css'

export const Card: React.FunctionComponent<CardProps> = ({ children, title, url, ...rest }) => {
  return (
    <a
      href={url}
      className={cx(
        'm-4 p-6 text-left border border-solid border-gray-200 rounded-lg hover:text-purple-500 focus:text-purple-500 active:text-purple-500 hover:border-purple-500 focus:border-purple-500 active:border-blue-500`',
        styles.Card
      )}
      {...rest}
    >
      <h3 className="mb-4 text-2xl">{title}</h3>
      <p className="m-0 text-2xl">{children}</p>
    </a>
  )
}

export interface CardProps {
  title: string
  url: string
}

export default Card
