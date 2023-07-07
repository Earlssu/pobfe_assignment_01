export default function useRouter() {
  const push = (path: string) => {
    history.pushState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return { push };
}
