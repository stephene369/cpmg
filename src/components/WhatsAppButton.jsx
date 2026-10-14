
import { getWhatsAppLink } from "../data/config";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppLink(
        "Bonjour CPMG, je voudrais avoir plus d'informations sur vos activités."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter la CPMG sur WhatsApp"
    >
      WhatsApp
    </a>
  );
}
