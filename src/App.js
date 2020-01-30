import React from 'react';
import List from './List'
import './App.css';
import STORE from './STORE';

export default class App extends React.Component{
  state = STORE
  
  
   handleDeleteItem = (cardKey) => {
    
      console.log(cardKey)
    //  console.log(this.state.lists.cardIds)
     // const newItems = this.state.allCards.filter(itm => itm.id !== cardKey)
     const newItems = this.state.allCards
     let lists = this.state.lists
     lists = lists.map(item => {
       item.cardIds = item.cardIds.filter(item => item !== cardKey)
       return item
     })
     delete newItems[cardKey]
      console.log(newItems);
    //  console.log(this.state.allCards[cardKey].id )
     //=== cardKey
      this.setState({
         allCards: newItems,
         lists: lists
       })
     
    }

    handleAddItem =(listId) => {
      console.log('add button working')
      let randomCard = this.newRandomCard()
      console.log(randomCard)
        
      const newAddItem = this.state.allCards
      newAddItem[randomCard.id]=randomCard

      const newLists= this.state.lists
      newLists.find(item => item.id === listId).cardIds.push(randomCard.id)
      
      this.setState({
       allCards: newAddItem,
        lists: newLists
      })
    }

    newRandomCard() {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }

  render() {
    const store = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              id={list.id}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteItem={this.handleDeleteItem}
              onAddItem={this.handleAddItem}
              
            />
          ))}
        </div>
      </main>
    );
  }


}
