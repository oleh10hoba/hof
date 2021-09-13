import styles from "./formcontrols.module.css"

export const Input = ({input, meta, ...props}) => {
    const Error = meta.touched && meta.error
    return (
        <div >
        <div>
            <input {...input} {...props} className={styles.formControl + " " + (Error ? styles.error : "")} />
        </div>
        </div>
    )
}

