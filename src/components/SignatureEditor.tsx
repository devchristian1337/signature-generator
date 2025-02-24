import { useSignature } from "@/hooks/useSignature";
import { Input } from "@/components/ui/input";

export const SignatureEditor = () => {
  const { name, setName } = useSignature();

  return (
    <div className="space-y-6 w-full p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 animate-fadeIn">
      <div className="space-y-2">
        <label className="text-sm font-medium">Full Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full"
        />
      </div>
    </div>
  );
};
