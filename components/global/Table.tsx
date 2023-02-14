const Table = (props: {
    title: string,
    data: any
}) => {
   return (<section className="py-1 bg-blueGray-50">
        <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">{props.title}</h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <input placeholder='pesquisar' className="text-blue-700 border border-blue-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"/>
                            <button className="text-white hover:text-blue-700 border bg-blue-700 hover:bg-white  border-blue-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Criar Aquisição</button>
                        </div>
                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                        <tr>
                            {
                                props.data[0].map((text:any) => (
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        {text}
                                    </th>)
                                )
                            }
                        </tr>
                        </thead>

                        <tbody>

                        {
                            props.data.map((item:any, index: number) => {
                                if (index == 0)
                                    return null;
                                return (
                                    <tr>
                                        {item.map((text:any) => (
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                {text}
                                            </th>
                                        ))}
                                    </tr>
                                )
                            })
                        }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </section>)
}


export default Table;