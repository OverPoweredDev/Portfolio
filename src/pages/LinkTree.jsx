import Connect from "../components/Connect";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function LinkTree() {
  const { t } = useTranslation();

  return (
    <div className="w-screen mt-20">
      <Connect />
      <div className="md:hidden px-8 pt-8 pb-4">
        <Link to="/" className="hover:underline">
          <h2 className="text-xl">&gt; {t("homepage.contact.go-to-main")}</h2>
        </Link>
      </div>
    </div>
  );
}
