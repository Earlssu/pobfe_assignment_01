import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";

interface RouterProps {
  route: React.ReactNode;
}

export default function Router({ route }: RouterProps) {
  const [path, setPath] = useState(location.pathname);
  const routes = React.Children.toArray(
    route
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
