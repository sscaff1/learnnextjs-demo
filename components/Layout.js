import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

export default function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <Header />
      {children}
    </div>
  );
}
