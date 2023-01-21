import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig.js';

const AddExpense = ({ uidUser, description, value, category, date }) => {
    return addDoc(
        collection(db, 'expenses'),
        {
            uidUser: uidUser,
            description: description,
            value: value,
            category: category,
            date: date
        });
}

export default AddExpense;