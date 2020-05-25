import React, {useState, useCallback, useEffect} from 'react';

const SetAddress = () => {

    const [inputText, setInput] = useState('');
    const [result, setResult] = useState([]);
    const filteredList = useMemo(() => {});

    const input = React.useRef();

    const onSearch = useCallback((text) => {
        setInput(text);   
    }, []);

    useEffect(() => {
        retrieveAddress(inputText);

    }, [inputText]);

    // 
    useEffect(() => {

    }, [result]);

    // retrieve data via server
    const retrieveAddress = useCallback((inputText)=> {
        
        setResult(['result1', 'result2', 'result3']);
    });


    return(
        <div>
            <form>
                <input type='text' ref={input}/>
                <button onClick={(e) => onSearch(e.currentTarget.value)}>
                    search
                </button>
            </form>
            
            <table>
                <tr>
                    <li>data1</li>
                    <li>data2</li>
                </tr>

            </table>
        </div>
    );
};

export default SetAddress;