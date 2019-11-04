import Header from "./Header";

interface LayoutProps {
    children: JSX.Element[]
}
const Layout = (props: LayoutProps) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
