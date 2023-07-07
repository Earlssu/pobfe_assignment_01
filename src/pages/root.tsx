import useRouter from "../hooks/useRouter";

export default function about() {
  const { push } = useRouter();
  return (
    <div>
      <h1> Root </h1>
      <button
        onClick={() => {
          push("/about");
        }}
      >
        about
      </button>
    </div>
  );
}
