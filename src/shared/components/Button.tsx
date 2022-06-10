interface Props {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, onClick }: Props) => {
    return (
        <button className="bg-accent text-white font-bold text-xl lg:text-2xl py-3 px-6 lg:py-4 lg:px-7 rounded-full">{text}</button>
    )
}
