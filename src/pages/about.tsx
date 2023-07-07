import useRouter from "../hooks/useRouter";

export default function about() {
  const { push } = useRouter();
  return (
    <div>
      <h1> About </h1>
      <button
        onClick={() => {
          push("/");
        }}
      >
        go main
      </button>
    </div>
  );
}
