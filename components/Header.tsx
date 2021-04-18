type Props = {
  title: string;
};

function Header({ title }: Props) {
  return <h1 className="title">{title}</h1>;
}

export default Header;
