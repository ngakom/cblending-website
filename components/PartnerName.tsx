import { PARTNER } from "@/lib/site";

// "CoSo, a company of PortionPack Group" is how the client names its partner (KG). Company names keep their capitals.
export default function PartnerName() {
  return (
    <>
      <a href={PARTNER.url} target="_blank" rel="noopener noreferrer" className="font-bold normal-case text-teal underline underline-offset-2 hover:text-green">
        {PARTNER.name}
      </a>
      , a company of <span className="normal-case">{PARTNER.group}</span>
    </>
  );
}
