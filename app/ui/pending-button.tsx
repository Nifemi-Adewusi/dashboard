"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./button";

export function PendingButton({
  textIfPending,
  textIfNotPending,
}: {
  textIfPending: string;
  textIfNotPending: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={pending ? "opacity-50 cursor-not-allowed" : ""}
      disabled={pending}
    >
      {pending ? textIfPending : textIfNotPending}
    </Button>
  );
}
