import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <div className="countdown-finished">The Big Day is Here!</div>;
    }

    return (
        <div className="countdown">
            <div className="time-box">
                <span>{days < 10 ? `0${days}` : days}</span>
                <p>Days</p>
            </div>
            <div className="time-box">
                <span>{hours < 10 ? `0${hours}` : hours}</span>
                <p>Hours</p>
            </div>
            <div className="time-box">
                <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
                <p>Mins</p>
            </div>
            <div className="time-box">
                <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                <p>Secs</p>
            </div>
        </div>
    );
};

export default Countdown;
