import React, {Component} from 'react'

const Context = React.createContext();


export class Provider extends Component {
         state = {
           contacts: [
             {
               id: 1,
               name: "John Doe",
               email: "jide@gmail.com",
               phone: "08109526245"
             },
             {
               id: 2,
               name: "Francy Ana",
               email: "francy@gmail.com",
               phone: "08109526567"
             },
             {
               id: 3,
               name: "Chioma B",
               email: "chiomab@gmail.com",
               phone: "08109526123"
             }
           ]
         }

         render() {
             return (
                 <Context.Provider value={this.state}>
                     {this.props.children}
                 </Context.Provider>
             )
         }
       }

       export const Consumer = Context.Consumer;