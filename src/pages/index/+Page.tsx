import { useState } from 'react';

export function Page(): JSX.Element {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}
