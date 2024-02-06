export function formatTodayDate() {
    const today = new Date();
  
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Ajoute un zéro devant si le mois est inférieur à 10.
    const day = String(today.getDate()).padStart(2, '0'); // Ajoute un zéro devant si le jour est inférieur à 10.
  
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }