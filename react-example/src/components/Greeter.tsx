import React from 'react';

// const Greeter: React.FC = (): JSX.Element => {
//     return (
//         <div>
//             <h1>Greeter</h1>
//         </div>
//     );
// };

interface GreeterProps {
    person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
    return (
        <div>
            <h1>Hello {person} </h1>
        </div>
    );
}

export default Greeter;
