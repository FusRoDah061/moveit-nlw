import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown () {
  const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <span style={{ backgroundImage: "url('icons/check-circle.svg')" }} />
        </button>
      ) : (
        <>
          {isActive ? (
            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
              Abandonar ciclo
              <span style={{ backgroundImage: "url('icons/end-cicle-dark.svg')" }} />
            </button>
          ) : (
            <button type="button" className={styles.countdownButton} onClick={startCountdown}>
              Iniciar um ciclo
              <span style={{ backgroundImage: "url('icons/play-arrow.svg')" }} />
            </button>
          )}
        </>
      )}

    </div>
  );
}
