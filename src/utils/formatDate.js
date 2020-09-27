export default function formatDate(date){
    if(date){
        let new_date = date.split("T");
        return new_date[0];
      }
}