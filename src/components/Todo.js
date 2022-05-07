import React from 'react'
import TodoItem from './Todoitem'
class Todo extends React.Component{
    state ={
        elements:[
            {id: '1', isCompleted: true,title: 'Zrobić zakupy'},
            {id: '2', isCompleted: false,title: 'Opłacic domene'}
        ]
    }

    markCompleted(id){
        const index= this.state.elements.findIndex(x => x.id===id)
        const newElements = this.state.elements
        newElements[index].isCompleted = true

        this.setState({elements: newElements})
    }
    render(){
        const elements = this.state.elements.map(e =>{
            return <TodoItem element={e} markClicked={this.markCompleted.bind(this)} />
        })
        return(
            <div>
                Todo app
                {elements}
            </div>
        )
    }
}


export default Todo;