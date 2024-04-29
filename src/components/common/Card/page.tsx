export default function Card({
  children,
  css,
}: {
  children: React.ReactNode;
  css?: string;
}) {
  return (
    <div
      style={{
        boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.2)",
        // backgroundColor: "#E4E4E4",
        // backdropFilter: "blur(10px)",
      }}
      // className="rounded-md "
      className={`bg-white rounded-md ${css}`}
    >
      {children}
    </div>
  );
}
