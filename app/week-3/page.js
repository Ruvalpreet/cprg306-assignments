import ItemList from "./item-list"

export default function Page(){
    
    return(
        <main className="min-h-screen bg-black">
            <h1 className="text-4xl font-extrabold text-center text-blue-500">Shopping List</h1>
            <ItemList />

        </main>
    )
}
