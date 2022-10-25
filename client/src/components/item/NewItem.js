import React, {useState} from 'react'

function NewItem() {
    const [state, setstate] = useState({
        name: '',
        unit: '',
        unitPrice: '',
        description: '',
    })
    const submitHandler = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3001/newItem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
    })
    console.log(res.data)
}
    const changeHandler = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

  return (
    <>
        <div class="myContainer">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <span><h2 >New Item  </h2> <i class="fas fa-caret-down"></i></span>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div class="left">
                    <button class="btn btn-primary"> + New </button>
                    
                    <button class="btn btn-primary"><i class="fas fa-caret-down "></i></button>
                    <i class="fas fa-bars marginIcon"></i>
                    <i class="fas fa-cog marginIcon"></i>
                    <span class="blue marginIcon">Page Tips <i class="fas fa-question-circle"></i></span>
                </div>
                
            </div>
        </div>  
        <div class="row formBox">
        <form onSubmit={submitHandler} method="POST">
            <table class="table table-responsive-xs table-responsive-sm">
                
                <tbody>
                    <tr>
                        <td>
                            
                        
                                <label class="form-check-label formLabel" for="inlineRadio1"><span class="">Type</span></label>
                            
                        </td>
                        <td>
                            <div class=" form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">Goods</label>
                            </div>
                            
                            <div class=" form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Service</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label class="form-check-label formLabel" for="inlineRadio1"><span class="">Name *</span></label>
                            
                        </td>
                        <td>
                            <div class=" form-check-inline">
                                <input type="text"  name='name' onChange={changeHandler} value={state.name} 
                                id="formControlDefault" class="form-control" placeholder=""/>
                                
                            </div>
                              
        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label class="form-check-label formLabel" for="inlineRadio1"><span>Unit</span></label>
                            
                        </td>
                        <td>
                            <div class=" form-check-inline">
                                <input type="" name='unit' onChange={changeHandler} value={state.unit} 
                                 id="formControlDefault" class="form-control"/>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label class="form-check-label formLabel" for="inlineRadio1"><span>Unit Price</span></label>
                            
                        </td>
                        <td>
                            <div class=" form-check-inline">
                                <span class="input-group-text">PKR</span>
                                <input type="number" name='unitPrice' onChange={changeHandler} value={state.unitPrice} 
                                id="formControlDefault" class="form-control" />
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        
                                <label class="form-check-label formLabel" for="inlineRadio1"><span class="underline">Description</span></label>
                            
                        </td>
                        <td>
                            <div class=" form-check-inline">
                                <textarea class="text rounded"  name='description' onChange={changeHandler} value={state.description} ></textarea>
                                
                            </div>
                              
                        
                        </td>
                    </tr>
                    
                    
                </tbody>
              </table>
                 
        <div class="fixed-actions">
            <button class="btn btn-primary" type="submit">Save</button>
            <button class="btn btn-light">Cancel</button>
        </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default NewItem