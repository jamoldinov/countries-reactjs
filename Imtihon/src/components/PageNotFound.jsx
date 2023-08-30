import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='container max-w-5xl mx-auto text-center mb-36'>
        <h1 className='mb-6 mt-16'>👇PageNotFound👇</h1>
        <p className='mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem corporis veritatis sint, velit at nobis eum consectetur, autem odio numquam tempora vel sunt, possimus atque non amet libero! Doloribus voluptates porro unde non soluta. Quibusdam voluptas laborum optio ducimus, a minus debitis amet sit accusamus, ad reiciendis, quos quis.</p>
        <NavLink to="/" className="py-2  px-3 border mt-3 mx-auto ">
            Home Page
        </NavLink>
    </div>
  )
}

export default PageNotFound