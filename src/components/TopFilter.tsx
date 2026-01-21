interface TopFilterProps {
    setTopFilter: (value: string) => void;
    topFilter: string;
}

const TopFilter = (props: TopFilterProps) => {
    return (
        <div className='bg-gray-100 h-15 items-center gap-4 px-4 text-[18px] text-gray-600 flex'>
             <p
                onClick={() => props.setTopFilter('relevant')}
                className={props.topFilter === 'relevant' ? 'w-20 font-bold cursor-pointer' : 'w-20 font-normal cursor-pointer'}>
                Relevant
            </p>
            <p
                onClick={() => props.setTopFilter('laatste')}
                className={props.topFilter === 'laatste' ? ' w-15 font-bold cursor-pointer' : 'w-15 font-normal cursor-pointer'}>
                Laatste
            </p>
            <p
                onClick={() => props.setTopFilter('top')}
                className={props.topFilter === 'top' ? 'font-bold cursor-pointer' : 'font-normal cursor-pointer'}>
                Top
            </p>
        </div>
    );
};

export default TopFilter;
