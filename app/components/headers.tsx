interface HeaderProp {
    heading: string;
}
export const Header = ({heading}: HeaderProp) => {
    return (
        <h3 className="text-3xl font-bold">{heading}</h3>
    )
}