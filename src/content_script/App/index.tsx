interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div className={"title"} style={{ width: "200px" }}>
      我是你第一个插件的注入
    </div>
  );
};

export default App;
