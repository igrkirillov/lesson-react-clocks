import {ClockAdd} from "./ClockAdd";
import styles from "./clock-list.module.css"
import {ClockWidget} from "./ClockWidget";
import {Clock} from "../../App";

export type ClockListProps = {
    clocks: Clock[]
    addClock: (clock: Clock) => void
    deleteClock: (clock: Clock) => void
}

export function ClockList(props: ClockListProps) {
    const {clocks, addClock, deleteClock} = props;
    return (
        <>
            <ClockAdd addClock={addClock}></ClockAdd>
            <div className={styles.container}>
                {clocks.map(clock => <ClockWidget clock={clock} deleteClock={deleteClock}></ClockWidget>)}
            </div>
        </>
    );
}