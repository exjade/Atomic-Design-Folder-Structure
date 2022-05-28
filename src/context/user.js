
import { createContext } from 'react'
const UserContext = createContext(null);
export default UserContext;
/* 
provider-----Component 1 ----- (Firebase init here)
-----Component 2 -----
-----Component 3 -----
consumer-----Component 4 ----- (Firebase init here)
-----Component 5 -----
-----Component 6 -----
-----Component 7 -----
-----Component 8 -----
consumer-----Component 9 ----- (firebase init hera)
*/