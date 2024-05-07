import React, {useState} from 'react'
import * as expenseService from "../../utilities/expense-service"
import SharedWith from '../SharedWith/SharedWith'

export default function Expense() {

  const [expenseDetails, setExpenseDetails] = useState({category: 'travel'})
  const [error, setError] = useState('')
  const [category, setCategory] = useState('Travel')
  const [friends, setFriends] = useState(1)

  function handleSelect(evt) {
    setCategory(evt.target.value)
    setExpenseDetails({...expenseDetails, [evt.target.name]: evt.target.value})
  }

  function handleChange(evt) {
    setExpenseDetails({...expenseDetails, [evt.target.name]: evt.target.value})
    setError('')
  }

  function handleSubmit(evt){
    evt.preventDefault()
    try {
      expenseService.createExpense(expenseDetails)
    } catch (error) {
      setError('Expense failed to log')
    }
  }

  return (
    <div>
        <div className='form-container'>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label>Date:</label>
                <input type='date' name='incurredDate' onChange={handleChange} required></input>
                <br />
                <label>Category</label>
                <select name='category' value={category} onChange={handleSelect} required>
                  <option value='Travel'>Travel</option>
                  <option value='Food'>Food</option>
                  <option value='Accommodation'>Accommodation</option>
                </select>
                <br />
                <label>Amount</label>
                <input type='number' name='amount' onChange={handleChange} required></input>
                <br />
                <label>Description</label>
                <input type='text' name='description' onChange={handleChange}></input>
                <div>
                <label>Shared with:</label>
                <input type="number" name="shared-with" value={friends} onChange={e => setFriends(e.target.value)} placeholder='number of friends'></input>
                <br />
                <SharedWith friends={friends} />
                </div>                
                <div>
                <button type='submit' disabled={friends <= 0}>+ Add expense</button>
                </div>
            </form>
        </div>
    </div>
  )
}
