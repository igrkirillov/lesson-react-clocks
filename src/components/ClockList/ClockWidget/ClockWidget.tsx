import styles from "./clock.module.css"
import removeIcon from "./icons/remove.png"
import {Clock} from "../../../App";
import {MouseEvent} from "react";

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
    return (
        <div className={styles.container}>
            <span>{clock.name + clock.timezoneOffset}</span>
            <div>
                <a href="#" className={styles.action} onClick={onClickDelete}>
                    <img src={removeIcon} className={styles.icon}/>
                </a>
            </div>
        </div>
    );
}