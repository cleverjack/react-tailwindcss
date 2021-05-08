import { useHistory } from 'react-router-dom'
import Header from '../../../components/Header'

import './style.scss'

const Congratulation = props => {
    const routerHistory = useHistory()

    return (
        <div className="bg-brand-bg min-h-screen flex flex-col">
            <Header />
            <div className="flex items-center justify-center flex-1">
                <div className="w-500 rounded shadow bg-white max-w-full p-12">
                    <h1 className="text-4xl font-bold text-brand-blue mb-6 text-center">Congratulations!</h1>
                    <p className="text-xl text-gray-40 text-center">
                        You have completed your profile !
                    </p>
                    <button className="bg-brand-blue py-3 rounded text-xl w-full text-white font-semibold mt-14 relative" onClick={() => routerHistory.push("/")}>
                        View All Subjects
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Congratulation;
