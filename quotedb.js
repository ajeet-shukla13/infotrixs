const connectDB=require('./db/connect');
const Product=require('./models/quote');

const ProductJson=require('./quote.json');

const start=async()=>{
    try{  
        await connectDB('mongodb://127.0.0.1:27017/quotesDB');
        await Product.create(ProductJson);
        console.log('success');
    }catch(err){
        console.log(err);
    }
}

start();