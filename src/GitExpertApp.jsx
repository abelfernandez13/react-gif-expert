import { useState } from 'react'
import {AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";


export const GitExpertApp =()=>{

const [categories,setcategories] = useState(['one punch'])    

const AddCategory=(onNewCategory)=>{

   if(categories.includes(onNewCategory)) return; // si la categoria existe no haga nada 

    setcategories([...categories,onNewCategory]);}


return (
<>

<h1>GifExpertApp</h1>
<AddCategories onNewCategory={AddCategory}/>
<ol>
     
     {   categories.map(categories=>{

   return <GifGrid key={categories} categories={categories} />

        }) }
    
</ol>
</>
)
  }