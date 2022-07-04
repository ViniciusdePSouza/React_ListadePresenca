import './styles.css'

export function Card(props){
    return(
        <div calssName="card">
            <strong>{props.name}</strong>
            <small>{props.times}</small>
        </div>
    )
}