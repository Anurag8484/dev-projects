export function Input({ref, placeholder}: {
    placeholder: string;
    ref?: any;
}){

    return <div>
        <input type={"text"} placeholder={placeholder} className="outline-1 px-3 py-1 overflow-hidden rounded-md" ref={ref}/>
    </div>

}