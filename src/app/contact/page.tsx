import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>This is the contact Page</h1>
      <Link href="/about">
        {" "}
        <button>About US</button>{" "}
      </Link>
    </div>
  );
};

export default page;
