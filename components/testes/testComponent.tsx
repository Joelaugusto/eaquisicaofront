

const TestComponent = (props: any) => {

    return (

        <div className="bg-stone-100 h-40"> 
        
        <h1>Lista de Fornecedores</h1>
        <hr />
        <h1>Filtro Pesquisa</h1>
        

        <form className="flex space-x-4 " action="">
        <div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <label htmlFor="exampleTel0" className="form-label inline-block mb-2 text-gray-700"> Nome</label>
      
    
    <input
      type="tel"
      className="
        form-control
        block
        w-40
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleTel0"
      placeholder="Phone input"
    />
  </div>
</div>
       


           </form>
           
        
        </div>

       
        
    )
}

export  default  TestComponent;
