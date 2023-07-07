import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";

interface RouterProps {
  children: React.ReactNode;
}

export default function Router({ children }: RouterProps) {
  const [path, setPath] = useState(location.pathname);
  const routes = React.Children.toArray(
    children
  ) as React.ReactElement<RouteProps>[];

  useEffect(() => {
    const handleSetPath = () => {
      setPath(location.pathname);
    };

    window.addEventListener("popstate", handleSetPath);

    return () => {
      window.removeEventListener("popstate", handleSetPath);
    };
  }, []);

  return routes.find((route) => route.props.path === path);
}
