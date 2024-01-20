
import React,{useState} from 'react'
import './FirstTodo.css'
import { RiDeleteBinLine } from "react-icons/ri";


 const FirstTodo = () => {

     const [Task, setTask] = useState([])
     const [Tasklist, setTasklist] = useState("")


 const HandleChange  = (e)=>{
     const getValue = e.target.value
    setTasklist(getValue)
 }

 const AddBtn = ()=>{
     const Taskitem =  {
        id : Math.floor(Math.random()* 100),
         task : Tasklist
     }
     setTask([...Task,Taskitem])
     setTasklist('')
 }

 const Deletebtn = (id)=>{

    const remove = Task.filter((el)=> el.id !== id)
     setTask(remove)
 }


 console.log(Task)











  return (
    <div className='Todo'>
      <div className="TodoContainer">
        <div className="todoHeader">
            <input type="text"  placeholder='Add tasks' onChange={HandleChange} value={Tasklist}/>
            <button onClick={AddBtn}>Add</button>
        </div>
        <div className="todocontent">
         {
            Task.map((props)=>(
                <div className="task" key={props.id}>
                    <p>
                        {props.task}
                    </p>    
                    <div className='delete'>
                    <RiDeleteBinLine onClick={()=> Deletebtn(props.id)} />
                    </div>
                </div>
                
            ))
         }
        </div>
      </div>
    </div>
  )
}

export default FirstTodo
