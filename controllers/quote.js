const Quote=require('../models/quote');

const getQuote=async (req, res) => {
    try {
      const quotes = await Quote.find();
      if (quotes.length === 0) {
        return res.status(404).json({ error: 'No quotes available.' });
      }
  
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex].q;
  
      res.json({ quote: randomQuote });
    } catch (error) {
      console.error('Error fetching quote:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const addQuote = async (req, res) => {
    try {
      const { q, a, c, h } = req.body;
  
      if (!q || !a || !c || !h) {
        return res.status(400).json({ error: 'Quote details are required.' });
      }
  
      const newQuote = new Quote({ q, a, c, h });
      await newQuote.save();
  
      res.status(201).json({ message: 'Quote added successfully.' });
    } catch (error) {
      console.error('Error adding quote:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const updateQuote = async (req, res) => {
    try {
      const { id } = req.params;
      const { q, a, c, h } = req.body;
  
      if (!q || !a || !c || !h) {
        return res.status(400).json({ error: 'Quote details are required.' });
      }
  
      const updatedQuote = await Quote.findByIdAndUpdate(id, { q, a, c, h }, { new: true });
  
      if (!updatedQuote) {
        return res.status(404).json({ error: 'Quote not found.' });
      }
  
      res.json({ message: 'Quote updated successfully.', quote: updatedQuote.q });
    } catch (error) {
      console.error('Error updating quote:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const deleteQuote = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedQuote = await Quote.findByIdAndDelete(id);
  
      if (!deletedQuote) {
        return res.status(404).json({ error: 'Quote not found.' });
      }
  
      res.json({ message: 'Quote deleted successfully.', quote: deletedQuote.q });
    } catch (error) {
      console.error('Error deleting quote:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
      


module.exports={getQuote,addQuote,updateQuote,deleteQuote};