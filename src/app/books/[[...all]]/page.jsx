import React from "react";

export default async function BooksAll({ params }) {
  const x = await params;

  console.log({ x });
  return <div>BooksAll</div>;
}
