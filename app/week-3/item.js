export default function Items(props){
    return(
        <div className=" border-4 p-10 m-10 bg-violet-900 hover:bg-violet-400">
            <h2 className="text-xl font-extrabold text-white">{props.name}</h2>
            <div className=" text-white">Buy {props.quantity} in {props.category}</div>
        </div>
    );
}