
import { useSignature } from "@/hooks/useSignature";
import { Input } from "@/components/ui/input";

export const SignatureEditor = () => {
  const { name, title, company, setName, setTitle, setCompany } = useSignature();

  return (
    <div className="space-y-6 w-full p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 animate-fadeIn">
      <div className="space-y-2">
        <label className="text-sm font-medium">Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Title (Optional)</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your title"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Company (Optional)</label>
        <Input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter your company"
          className="w-full"
        />
      </div>
    </div>
  );
};
