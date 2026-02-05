import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { HiMiniItalic } from 'react-icons/hi2';
import { MdFormatListBulleted } from 'react-icons/md';

interface TiptapProps {
    value: string;
    onChange: (content: string) => void;
    placeholder?: string;
}

const Tiptap = ({ value, onChange}: TiptapProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
        ],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <div className='rounded'>
            <div className='flex gap-2 h-14 bg-gray-100 p-2'>
                <button
                    type='button'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={
                        editor.isActive('bold')
                            ? 'bg-blue-500 text-[21px] text-white font-bold px-3 py-1 rounded'
                            : 'px-3 py-1 rounded font-bold text-[21px]'
                    }>
                    B
                </button>

                <button
                    type='button'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={
                        editor.isActive('italic')
                            ? 'bg-blue-500 text-white px-3 py-1 rounded'
                            : 'px-3 py-1 rounded'
                    }>
                    <HiMiniItalic className='size-5' />
                </button>

                <select
                    onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (val === 0) {
                            editor.chain().focus().setParagraph().run();
                        } else {
                            editor
                                .chain()
                                .focus()
                                .setHeading({ level: val as 1 | 2 | 3 })
                                .run();
                        }
                    }}
                    className='px-3 py-1 rounded border border-gray-300 focus:outline-none bg-white'>
                    <option value='0'>Normal</option>
                    <option value='1'>H1</option>
                    <option value='2'>H2</option>
                    <option value='3'>H3</option>
                </select>

                <button
                    type='button'
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className={
                        editor.isActive('bulletList')
                            ? 'bg-blue-500 text-white px-3 py-1 rounded'
                            : 'px-3 py-1 rounded'
                    }>
                    <MdFormatListBulleted className='size-6' />
                </button>
            </div>

            <EditorContent
                editor={editor}
                className='p-4 min-h-37.5 
                [&_.ProseMirror]:focus:outline-none
                [&_.ProseMirror_h1]:text-3xl 
                [&_.ProseMirror_h1]:font-bold
                [&_.ProseMirror_h2]:text-2xl 
                [&_.ProseMirror_h2]:font-bold
                [&_.ProseMirror_h3]:text-xl 
                [&_.ProseMirror_h3]:font-bold
                [&_.ProseMirror_strong]:font-bold
                [&_.ProseMirror_em]:italic
                [&_.ProseMirror_ul]:list-disc 
                [&_.ProseMirror_ul]:pl-5'
            />
        </div>
    );
};

export default Tiptap;
