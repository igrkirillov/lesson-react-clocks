import styles from "./clock-add.module.css"
import {Clock} from "../../../App";
import {FormEvent} from "react";

export type ClockAddProps = {
    addClock: (item: Clock) => void
}

export function ClockAdd(props: ClockAddProps) {
    const onSubmit =  function (event: FormEvent) {
        event.preventDefault();
        const form: HTMLFormElement = event.target as HTMLFormElement;
        const clock: Clock = {
            name: (form[0] as HTMLInputElement).value,
            timezoneOffset: +((form[1] as HTMLInputElement).value)
        };
        props.addClock(clock);
        form.reset();
    }
    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <div className={styles["name-container"]}>
                <label form="name-input">Название часов</label>
                <input type="text" id="name-input" className={styles["name-input"]} required={true}/>
            </div>
            <div className={styles["timezoneOffset-container"]}>
                <label form="timezoneOffset-input">Смещение часовой зоны</label>
                <input type="number" id="timezoneOffset-input" className={styles["timezoneOffset-input"]} required={true}/>
            </div>
            <div className={styles["add-button-container"]}>
                <input type="submit" value="Добавить" className={styles["add-button"]}/>
            </div>
        </form>
    );
}