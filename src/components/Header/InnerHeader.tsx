import ActionButton from "./ActionButton";
import ContactInfo from "./ContactInfo";
import Logo from "./Logo";

export default function InnerHeader() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-10">
        <Logo />
        <div className="flex flex-wrap items-center justify-center gap-5">
          <ContactInfo />
          <ActionButton type="mail" />
          <ActionButton type="line" />
        </div>
      </div>
    </div>
  );
}
