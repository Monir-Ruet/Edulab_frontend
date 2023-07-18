import Folderflow from "./folderflow"
interface PostBodyProps {
    className?: string
}
const Postbody: React.FC<PostBodyProps> = ({
    className
}) => {
    return (
        <div className={className}>
            <Folderflow items={['Computer', 'Laptop']} />
            <div>
                Body
            </div>
        </div>
    )
}

export default Postbody