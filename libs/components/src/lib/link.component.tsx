import Link from 'next/link';

export interface LinkComponentProps {
  href: string,
  text: string,
};

export function LinkComponent(props: LinkComponentProps) {
  const { href, text } =  props;

  return (
    <Link href={href}>{text}</Link>
  );
}

export default LinkComponent;
