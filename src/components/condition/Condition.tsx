
type Props = {
    condition: string
}

export const Condition = ({condition}:Props) => {

    return (<span>
        {condition == 'new'?'Nuevo': 'Usuado'}
    </span>)
}