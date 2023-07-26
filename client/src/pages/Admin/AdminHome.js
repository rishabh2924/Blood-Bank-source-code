import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { useSelector } from 'react-redux'

const AdminHome = () => {
    const {user}=  useSelector(state=>state.auth)
  return (
    <Layout>
       <div className="container">
        <div className="d-flex flex-column mt-4">
            <h1>Welcome Admin <i className='text-success'>{user?.name}</i></h1>
            <h3>Manage Blood Bank App</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam modi eligendi ex delectus ipsum eveniet doloribus dolores numquam, dolorum, deleniti tempore! Atque aperiam quo rem possimus sapiente culpa, minus nam neque accusantium doloremque officia ab ullam nostrum, corporis quam dolor velit eveniet quae vitae assumenda maiores quisquam quos earum beatae? Porro dignissimos fugit laborum saepe alias obcaecati maxime repellendus unde magnam nesciunt quibusdam, quaerat sequi rem, officia atque cum. Omnis nam odio distinctio excepturi error minima autem blanditiis natus nulla, expedita, sapiente ipsum, eum at similique neque. Magni labore, reiciendis corrupti incidunt quibusdam quo delectus aliquid blanditiis, inventore doloremque accusantium natus sit sapiente impedit provident illo voluptas expedita molestiae! Dolorum quasi atque vel tenetur, eos possimus quam nostrum? Voluptatem, saepe. Animi culpa ratione, illo ea, tempore atque nihil veritatis deserunt magnam saepe repellendus architecto voluptatibus quae non qui, voluptatem vel vero ipsam perferendis laudantium expedita adipisci maiores dolor corporis! Vitae ipsa maxime corrupti excepturi incidunt cumque hic ab aspernatur sit eligendi, dolor ratione illum ipsam! Facere distinctio quos sed eos at aliquid itaque fugiat repellat nulla nihil, beatae quasi nostrum, animi quae neque perferendis deserunt rerum nemo reiciendis illum pariatur? Voluptatum, est quisquam error odio sunt distinctio eligendi nemo delectus.</p>
        </div>
       </div>
    </Layout>
  )
}

export default AdminHome