import React from 'react';
import Card from '../Card/Card';
import './IncorrectAge.css';

const IncorrectAge = (props) => {
    // const [isClicked, setIsClicked] = useState(false);

    const buttonHandler = () => {
        // setIsClicked(true);
        props.isButtonClicked(true);
    }

    return (
        <div className="no-data-provided__overlay">
            <Card className="no-data-provided">
                <h2>Invalid Input</h2>
                <p>Provide correct age</p>
                <button onClick={buttonHandler}>Okay</button>
            </Card>
        </div>
    );
}

export default IncorrectAge;