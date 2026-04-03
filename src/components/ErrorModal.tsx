import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { IoMdClose } from "react-icons/io"

const ErrorModal = () => {
    const auth = useContext(AuthContext)
    if (!auth) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center z-1000">
            <div className="rounded-xl flex flex-col gap-4 p-6 w-72 shadow-lg bg-white border border-gray-100">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                        <div className="bg-red-100 rounded-full p-1">
                            <IoMdClose className="text-red-500 size-4" />
                        </div>
                        <p className="font-semibold text-gray-800">Er ging iets mis</p>
                    </div>

                </div>
                <p className="text-gray-500 text-sm">{auth.error}</p>
                <button
                    onClick={() => auth.setError(null)}
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-2 text-sm transition-colors">
                    Sluiten
                </button>
            </div>
        </div>
    )
}

export default ErrorModal