import { Button } from "../ui/button";
import { Menu, Search } from "lucide-react";

export default function CategorySearch() {
  return (
    <div className="max-w-6xl mx-auto my-10  flex items-center gap-4 box-shadow rounded-2xl px-3 py-4">
      <div className="box-light w-full border flex gap-1.5  px-2 py-3  ">
        <Search className="text-muted-foreground" />
        {/* input shudcn */}
        <input
          type="text"
          placeholder="Search on Categories "
          className="w-full outline-none"
        />
      </div>
      <Button size="icon-lg" variant="secondary">
        <Menu />
      </Button>
      <Button className="px-2 py-3 h-full">Find Product</Button>
    </div>
  );
}
