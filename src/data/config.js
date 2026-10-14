
export const cooperative = {
    name: "Coopérative Porcine Moderne de Ganvié 1",
    shortName: "CPMG",
    registration: "03/05/04/2026/0019",
    tribunal: "TPI/AB-CAL",
    journal: "Journal Officiel du 15 août 2026",
    journalPage: "1173",
    address: "Ganvié 1, maison KOUGNIMON",
    country: "Bénin",
  
    // À remplacer par le vrai numéro
    whatsapp: "2290100000000",
  };
  
  export function getWhatsAppLink(message) {
    return `https://wa.me/${cooperative.whatsapp}?text=${encodeURIComponent(message)}`;
  }
  