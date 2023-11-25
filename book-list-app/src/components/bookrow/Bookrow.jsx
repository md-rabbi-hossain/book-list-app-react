import { MdDelete } from "react-icons/md";

export default function Bookrow({ info, ondelete }) {
    const { title, author, isbn, pubyear, } = info

    return (

        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{isbn}</td>
            <td>{pubyear}</td>
            <td><MdDelete onClick={() => ondelete(isbn)} /></td>
        </tr>

    );
}
