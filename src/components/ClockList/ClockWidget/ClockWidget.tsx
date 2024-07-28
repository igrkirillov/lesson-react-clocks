import styles from "./clock.module.css"
import removeIcon from "./icons/remove.png"
import {Clock} from "../../../App";
import {MouseEvent, useEffect, useRef} from "react";

export type ClockWidgetProps = {
    clock: Clock
    deleteClock: (clock: Clock) => void
}

export function ClockWidget(props: ClockWidgetProps) {
    const {clock, deleteClock} = props;
    const onClickDelete = function (event: MouseEvent): void {
        event.preventDefault();
        deleteClock(clock);
    }
    const ref_second = useRef<HTMLDivElement>(null);
    const ref_minute = useRef<HTMLDivElement>(null);
    const ref_hour = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const currentSec = getSecondsToday(clock.timezoneOffset);
        const seconds = (currentSec / 60) % 1;
        const minutes = (currentSec / 3600) % 1;
        const hours = (currentSec / 43200) % 1;
        setTime(60 * seconds, ref_second.current);
        setTime(3600 * minutes, ref_minute.current);
        setTime(43200 * hours, ref_hour.current);
    }, []); //componentDidMount
    return (
        <div className={styles.widget}>
            <div className={styles["header-container"]}>
                <span className={styles.name}>{clock.name}</span>
                <a href="#" className={styles.link} onClick={onClickDelete}>
                    <img src={removeIcon} className={styles.icon} alt="remove icon"></img>
                </a>
            </div>
            <div className={styles.clock}>
                <div className={styles.clock__second} ref={ref_second}></div>
                <div className={styles.clock__minute} ref={ref_minute}></div>
                <div className={styles.clock__hour} ref={ref_hour}></div>
                <div className={styles.clock__axis}></div>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
                <section className={styles.clock__indicator}></section>
            </div>
        </div>
    );
}

function setTime(left: number, divElement: HTMLDivElement | null) {
    if (divElement) {
        divElement.style.animationDelay = "" + left * -1 + "s";
    }
}
function getSecondsToday(timezoneOffset: number):number {
    const now: Date = new Date(); // тек тайм-зона считаем москва +3ч
    now.setTime(now.getTime() + (timezoneOffset - 3) * 60 * 60 * 1000);
    const today: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = now.getTime() - today.getTime();
    return Math.round(diff / 1000);
}