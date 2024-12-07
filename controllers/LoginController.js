const CreateItem = (req, res) => {
    // Logic to handle login creation
    res.send('Item created!');
  };
  
  const GetItems = (req, res) => {
    // Logic to fetch items
    res.send('Items fetched!');
  };
  
  module.exports = { CreateItem, GetItems }; // Export the methods
  