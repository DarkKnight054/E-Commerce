"use client";

import { Button, Spinner } from "flowbite-react";

export default function Spinner() {
  return (
    <>
      <Button>
        <Spinner aria-label="Spinner button example" />
        <span className="pl-3">Loading...</span>
      </Button>
    </>
  );
}
