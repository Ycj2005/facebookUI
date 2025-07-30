import data from './Data';
import Profilepage from './page';

export default function Heropage() {
    return (
        <div>
            {
                data.map((inform, index) =>
                    <>
                        <Profilepage author={inform.author}></Profilepage>
                    </>
                )
            }
        </div>
    )
}
