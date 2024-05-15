export const checkValidation = (name,category,price) => {
    const validName = /^[a-zA-Z0-9\s\-_]+$/.test(name)
    const validCategory = /^[a-zA-Z0-9\s\-_]+$/.test(category)
    const validPrice =  /^\d+(\.\d{1,2})?$/.test(price)
    
    if(!validName || name.trim() === ''){
      return "Name is not valid"
    }
    if (!validCategory || category.trim() === ''){
      return "Category is not valid"
    }
     if (!validPrice || price.trim() === ''){
      return "Price is not valid"
    }
    return null
    }