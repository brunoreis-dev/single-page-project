import Link from 'next/link';
import { 
  ButtonWrapper,
  ButtonLink,
  Text,
 } from './button.style';

const Button = (props) => {
  const { href, small, green, className } = props

  return (
    <>
      {href &&
        <Link href={href}>
          <ButtonLink className={className} href={href} green={green} small={small}>
            <Text>{props.children}</Text>
          </ButtonLink>
        </Link>
      }

      {!href &&
        <ButtonWrapper className={className} green={green} small={small}><Text>{props.children}</Text></ButtonWrapper>
      }
    </>
  )
}

export default Button;