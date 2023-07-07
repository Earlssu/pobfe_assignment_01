export interface RouteProps {
  path: string;
  component: React.ReactNode;
}

export default function Route({ path, component }: RouteProps) {
  return window.location.pathname == path ? <div>{component}</div> : null;
}
