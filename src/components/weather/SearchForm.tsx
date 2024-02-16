import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

interface Props {
    city: string,
    setCityState: Dispatch<SetStateAction<string>>
}

function SearchForm({city, setCityState}: Props) {

    const [nameState, setNameState] = useState<string>(city);

    const cityNameChangeHandler =(e: ChangeEvent<HTMLInputElement>) => {
        setNameState(e.target.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCityState(nameState)
    }


    return (
        <form className="m-auto flex justify-center border-b-2 pb-6 mb-6" onSubmit={submitHandler}>
            <input type={"text"} name={"cityName"} className={"border rounded p-3"} onChange={cityNameChangeHandler} value={nameState} />
            <input type={"submit"} className={"bg-primary px-6 py-3 ml-3 text-white rounded"} value={"search"} />
        </form>
    );
}

export default SearchForm;