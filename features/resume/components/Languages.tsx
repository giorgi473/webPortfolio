import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function Languages() {
  return (
    <Card className="border bg-zinc-950 rounded-md">
      <CardHeader className="px-7">
        <CardTitle className="text-2xl font-bold text-purple-400">
          Languages
        </CardTitle>
      </CardHeader>
      <CardContent className="py-2 space-y-4 text-lg leading-relaxed text-slate-200 px-7">
        <p>
          Georgian <span className="text-purple-400">(Native)</span>
        </p>
        <p>English</p>
      </CardContent>
    </Card>
  );
}

export default Languages;
