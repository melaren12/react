import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Home
      </Button>
      <Button isActive={active === "learn"} onClick={() => onChange("learn")}>
        Learn
      </Button>
    </section>
  );
}
