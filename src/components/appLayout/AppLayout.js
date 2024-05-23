import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppLayout = ({ wrappedComponent: WrappedComponent }) => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ paddingTop: "108px" }}>
      <WrappedComponent />
    </div>
  );
};

export default AppLayout;
