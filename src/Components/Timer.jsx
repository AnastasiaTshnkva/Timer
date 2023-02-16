import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledTimer = styled.div`
  .time_box {
    display: flex;
    justify-content: center;

    .block {
      width: 150px;
      height: 150px;
      margin-left: 20px;
      margin-right: 20px;
      border-radius: 20px;
      box-shadow: 7px 20px 30px 7px rgb(1, 1, 98, 0.5);

      .block_title {
        display: block;
        height: 20%;
        padding-top: 6px;
        text-align: center;
        vertical-align: center;
        background-color: #ffffff;
        color: rgb(137, 74, 169);
        border-radius: 0 0 20px 20px;
      }

      .block_time {
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 72px;
        padding-top: 20px;
      }
    }
  }

  .interaction_box {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    .button, .input {
      margin: 10px;
      padding: 10px;
      background-color: #ffffff;
      border: none;
      border-radius: 7px;
      color: rgb(137, 74, 169);
      font-size: 16px;
    }

    .button {
      min-width: 70px;
      
      &:hover {
        box-shadow: 3px 10px 15px 3px rgb(1, 1, 98, 0.5);
      }
    }

    .input {
      width: 70px;
      &::placeholder {
        color: rgb(133, 129, 204);;
      }

      &:focus {
        outline: none;
      }
    }
  }

`

const Timer = () => {
    const [timerActive, setTimerActive] = useState(false);
    const [givenTime, setGivenTime] = useState('');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [clearTimer, setClearTimer] = useState(false);

    useEffect(() => {
        if(timerActive && givenTime >= 1 && !clearTimer) {
            const timeout = setTimeout(() => {
                let shownTime = givenTime - 1;
                setGivenTime(givenTime - 1);

                if(shownTime < 60) {
                    setMinutes('00');
                    if (shownTime < 10) {
                        setSeconds('0' + (shownTime));
                    } else {
                        setSeconds(shownTime);
                    }
                }

                if(shownTime >= 60) {
                    const sec = (shownTime) % 60;
                    const min = Math.trunc((shownTime) / 60)

                    if (min < 10) {
                        setMinutes('0' + min);
                    } else {
                        setMinutes(min);
                    }

                    if (sec < 10) {
                        setSeconds('0' + sec);
                    } else {
                        setSeconds(sec);
                    }
                }
            }, 1000)

            if (clearTimer) {
                clearTimeout(timeout);
            }
        } else {
            setTimerActive(false);
            setMinutes('00');
            setSeconds('00');
        }
    }, [timerActive, givenTime, clearTimer]);

    return (
        <StyledTimer>
            <div className={'time_box'}>
                <div className={'block'}>
                    <div className={'block_time'}>{minutes}</div>
                    <p className={'block_title'}>MINUTES</p>
                </div>
                <div className={'block'}>
                    <div className={'block_time'}>{seconds}</div>
                    <p className={'block_title'}>SECONDS</p>
                </div>
            </div>
            <div className={'interaction_box'}>
                <button className={'button'} type={'button'}
                        onClick={() => {
                            setTimerActive(!timerActive);
                        }
                }>
                    {timerActive ? 'Stop' : 'Start'}
                </button>
                {!timerActive &&
                    <input id={'input'} className={'input'} name={'time'} type={'number'} id={'input'} value={givenTime}
                           onChange={(event) => {
                               setGivenTime(event.target.value);
                           }}/>
                }
                <button className={'button'} type={'button'}
                        onClick={() => {
                            setClearTimer(true);
                            setGivenTime('');
                            setTimerActive(false);
                        }}>Refresh</button>
            </div>
        </StyledTimer>
        )
};

export default Timer;
