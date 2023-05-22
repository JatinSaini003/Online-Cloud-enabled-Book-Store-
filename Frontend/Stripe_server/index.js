require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app =express()

app.use(cors({
    origin: '*'
}))
app.use(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

var items=[]

const fetch_items = async()=>{
    try{
        await axios.get(`http://${process.env.API_ADDRESS}:5000/books`).then(async (res)=>{
            items = await res.data
            console.log(items)
        })
    }catch(err){
        console.error(err)
    }
    
}

fetch_items()

var user = ""
var book_id=""
const link = []

app.get("/",async(res,req)=>{
    console.log("hello")
    res.json(fetch_items())

})

app.post('/create-checkout-session',async (req,res)=>{
    console.log(req.body.item_list)
    try{
        fetch_items()
        console.log(`http://${process.env.API_ADDRESS}:5000/books`)
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.item_list.map(item =>{
                const storeItem = items.filter(e => e.Book_id === item.book_id)
                
                user = item.user_id
                book_id = item.book_id
                
                return{
    
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: storeItem[0].name,
                           // images: [`http:${process.env.API_ADDRESS}:5000/book_img/${storeItem[0].name}`]
                        },
                        
                        unit_amount: storeItem[0].price*100
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum : 1
                    },

                    quantity: item.quantity
                }
                }
            ),

            
            invoice_creation: {
                enabled: true,
              },
            shipping_address_collection: {
                allowed_countries: ['IN']
            },
            
            
            success_url: `http://${process.env.CLIENT_URL}:3000/success?user_id=${user}&book_id=${book_id}`,
            cancel_url: `http://${process.env.CLIENT_URL}:3000/cancel`
        })
        res.json({url: session.url})
    }catch(e){
        res.status(500).json({error: e.message})
    }
})

app.post('/create-checkout-session-cart',async (req,res)=>{
    
    console.log(req.body.item_list)
    try{
        fetch_items()
        link.splice(0,link.length)
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.item_list.map(item =>{
                const storeItem = items.filter(e => e.Book_id === item.book_id)
              
                user = item.user_id
                book_id = item.book_id
                link.push(book_id)
                
                return{
    
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: storeItem[0].name,
                           // images: [`http://${process.env.API_ADDRESS}:5000/book_img/${storeItem[0].name}`]
                        },
                        
                        unit_amount: storeItem[0].price*100
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum : 1
                    },

                    quantity: item.quantity
                }
                }
            ),

            
            invoice_creation: {
                enabled: true,
              },
            shipping_address_collection: {
                allowed_countries: ['IN']
            },
            
            
            success_url: `http://${process.env.CLIENT_URL}:3000/success_cart?user_id=${user}`,
            cancel_url: `http://${process.env.CLIENT_URL}:3000/cancel`
        })
        res.json({url: session.url,item_list:link})
        
    }catch(e){
        res.status(500).json({error: e.message})
    }
})




app.listen(3001)
