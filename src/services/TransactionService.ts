import { Category } from "../types/category";
import { getCategories } from "./CategoryService";
import { TransactionType, typeData } from "./TypeService";

export type Transaction = {
    id: string,
    value: number,
    category: Category,
    type?: TransactionType,
}

export function getTransactions(): Transaction[] {
    let str:any = localStorage.getItem('transactions')
    return JSON.parse(str);
}

export function createTransaction(value:number, categoryId:string, typeId:number){
    
        const newTransaction:Transaction = {
            id: Math.random().toString(36).substr(2, 9),
            value: value,
            category: {
                id: categoryId,
                name: getCategories().find(c => c.id === categoryId)?.name || 'Unknown'
            },
            type: typeData.find(t => t.id === typeId)
        }
    
        const list:Transaction[] = getTransactions();
        list.push(newTransaction);
    
        localStorage.setItem('transactions', JSON.stringify(list));
}

export function deleteTransaction(id:string){
    localStorage.setItem('transactions', JSON.stringify(getTransactions().filter(t => t.id !== id)));
}

export function calculateTransactionValue(){
    return getTransactions().reduce((total, transaction) => total + (transaction.value * (transaction.type?.id == 1 ? 1 : -1)), 0);
}
