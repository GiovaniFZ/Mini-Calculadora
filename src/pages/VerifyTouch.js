import { useState } from 'react';

export default function VerifyTouch(){
    const [touched, setTouched] = useState(false);

    return{
        touched,
        markTouched: () => setTouched(true),
        markUntouched: () => setTouched(false)
    }
}