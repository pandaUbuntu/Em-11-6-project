import { Category } from "../types/category";

export function createCategory(name: string):void{
    if(name.trim().length === 0){
        throw new Error("Category name cannot be empty");
    }

    if(checkCategory(name)){
        throw new Error("Category name already exists");
    }

    const newCategory:Category = {
        id: Math.random().toString(36).substr(2, 9),
        name: name
    }

    const catagoryList:Category[] = getCategories();
    catagoryList.push(newCategory);

    localStorage.setItem('categories', JSON.stringify(catagoryList));
}

export function getCategories():Category[] {
    let str:any = localStorage.getItem('categories')
    return JSON.parse(str);
}

export function deleteCategory(id: string):void
{
    localStorage.setItem('categories', JSON.stringify(getCategories().filter(category => category.id !== id)));
}

function checkCategory(name: string):boolean{
    const categories:Category[] = getCategories();
    let isExist:boolean = false;

    categories.forEach(category => {
        if(category.name.toLowerCase() === name.trim().toLowerCase()){
            isExist = true;
        }
    });
    
    return isExist;
}
