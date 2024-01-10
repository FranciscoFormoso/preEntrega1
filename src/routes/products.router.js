import {Router} from 'express';
import {productManager} from '.../index.js'

const productRouter = Router()


productsRouter.get('/', async(req, res)=>{
    try{
        const {limit} = req.quey;
        const products = await productManager.gerProducts()

        if(limit){
            const limitedProducts = products.slice (0, limit)
        return res.json(limitedProducts)
    }

    }catch (error){
        console.log(error)
        res.send('Error al intentar recibir productos')
    }
})

products.router.get('/:pid', async (req, res)=>{
    const {pid} = req.params;
    try{
        const products = productManager.getProductById(pid)
        res.json(products)
    }catch (error){
        console.log(error);
        res.send('Error al intentar recibir producto con id ${pid}')
        
    }
})

productRouter.post ('/', async (req, res)=>{
    try{
        const {title, description, price, thumnail, code, status, category} = req.body;
        const response = await productManager.addProduct({title, description, price, thumnail, code, status, category})
        res.json(response)
}   catch (error) {
    console.log(error)
    res.send('Error al intentar agregar producto')
    }
})

productsRouter.put('/:pid', async (req, res)=> {
    const {pid} = req.params;

    try {
        const {title, description, price, thumnail, code, status, category} = req.body;
        const response = await productManager.updateProduct(id, {title, description, price, thumnail, code, status, category})
        res.json(response)
    } catch (error) {
        console.log(error)
        res.send(`Error al intentar editar el producto con id ${pid}`)
    }
})

productsRouter.delete('/:pid', async (req, res)=>{
    const {pid} = req.params;
    try {
        await productManager.deleteProduct(id)
        res.send('Producto eliminado exitosamente')
    } catch (error) {
        res.send(`Error al intentar eliminar el producto`)
    }
})



export {productsRouter}