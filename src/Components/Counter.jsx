


const Counter = ({tickets, setTickets}) => {

    const decreaseCount = () => {
        if(tickets > 1){
            setTickets((prev) => {
                const updatedTickets = prev - 1;
                localStorage.setItem('tickets', updatedTickets); 
                return updatedTickets;
            });
        }
    }

    const increaseCount = () => {
        if(tickets < 6){
            setTickets((prev) => {
                const updatedTickets = prev + 1;
                localStorage.setItem('tickets', updatedTickets); 
                return updatedTickets;
            });
        }
    }


    return ( <div className='flex justify-between items-center rounded-lg gap-x-2 bg-white p-1'>
        <div className='bg-black p-1 rounded-lg w-[28px] h-[28px] flex justify-center items-center text-white text-xl cursor-pointer select-none' onClick={decreaseCount}>-</div>
        <div className='text-[22px] text-black'>tickets: {tickets}</div>
        <div className='bg-black p-1 rounded-lg w-[28px] h-[28px] flex justify-center items-center text-white text-xl cursor-pointer select-none' onClick={increaseCount}>+</div>
    </div> );
}
 
export default Counter;
