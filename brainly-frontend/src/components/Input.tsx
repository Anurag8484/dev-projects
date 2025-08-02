export function Input({onChange, placeholder}: {
    placeholder: string;
    onChange: () => void;
}){

    return <div>
        <input type={"text"} placeholder={placeholder} className="outline-1 px-3 py-1 overflow-hidden rounded-md" onChange={onChange}/>
    </div>

}