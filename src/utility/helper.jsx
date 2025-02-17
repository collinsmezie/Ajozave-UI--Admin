
//convert from ISO to mysql standard i.e yyyy-mm-dd
export function convertDate(dateArg){
    const vArray = dateArg.toLocaleDateString('en-GB').split('/');
    return [vArray[2],vArray[1],vArray[0]].join('-');
}


export const truncateDescription = (description, maxLength = 35) => {
    if (!description) return ""; // Handle empty or undefined descriptions
    if (description.length <= maxLength) return description; // No need to truncate
  
    return description.slice(0, maxLength).trim() + "...";
  };
  

  export const fetchUserName = () => {
    const fullName = localStorage.getItem('username');
    return fullName ? fullName.split(' ')[0] : 'User';
  };