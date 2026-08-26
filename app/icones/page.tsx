import { IconConcepts } from "@/components/icon-concepts";
import { SiteHeader } from "@/components/site-header";

export default function IconesPage() {
  return (
    <div className="min-h-full">
      <SiteHeader active="/icones" />
      <IconConcepts />
    </div>
  );
}
