function formatDate(date){

    month = date.getMonth()+1;
    monthString = "";
     if(month == 1) { monthString = "Stycznia";}
     if(month == 2) { monthString = "Lutego";}
     if(month == 3) { monthString = "Marca";}
     if(month == 4) { monthString = "Kwietnia";}
     if(month == 5) { monthString = "Maja";}
     if(month == 6) { monthString = "Czerwca";}
     if(month == 7) { monthString = "Lipca";}
     if(month == 8) { monthString = "Sierpnia";}
     if(month == 9) { monthString = "Września";}
     if(month == 10) { monthString = "Października";}
     if(month == 11) { monthString = "Listopada";}
     if(month == 12) { monthString = "Grudnia";}
    
    const formatedDate = String(date.getDate()+" " +monthString +" " + date.getFullYear()+" " + date.getHours() +":"+ date.getMinutes());
    return formatedDate;
    }
    module.exports = formatDate;