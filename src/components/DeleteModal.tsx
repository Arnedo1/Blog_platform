import { useContext } from "react"
import { BlogContext } from "../context/BlogContext"

const DeleteModal = ({ id, blog_id }: { id: number, blog_id: number }) => {
    const blog = useContext(BlogContext)
    if(!blog)return null
  return (
    <div className="fixed inset-0 flex items-center justify-center z-400">
            <div className="rounded-xl flex flex-col gap-4 p-6 w-72 shadow-lg bg-white border border-gray-100">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-800">Wil je deze reactie verwijderen?</p>
                    </div>

                </div>
                <button
                    onClick={() => {
                        console.log('deleting comment', id,blog_id)
                        blog.deleteComments(id,blog_id)}}
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-2 text-sm transition-colors">
                    Verwijder
                </button>
            </div>
        </div>
  )
}

export default DeleteModal