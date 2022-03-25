function scanAndFilter(freightItems, forbiddenString) {
    let filteredItems = [];
  
    filteredItems = freightItems.filter((item) => {
      return item !== forbiddenString;
    });
  
    return filteredItems;
  }
  
  const filtered = scanAndFilter(
    ["dog", "ray gun", "cat", "zippers", "ray gun"],
    "ray gun"
  );
  console.log("Filtered Items");
  console.log(filtered);
  