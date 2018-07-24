import React, { Component } from 'react';
//import './App.css';

class quotetable extends Component {

    render() {
        const quotes = this.props.quotes;
        const currentFilter = this.props.currentFilter;
        const currentTheme = this.props.currentTheme;
        const currentPage = this.props.currentPage;

        //Filter the quotes
        let filteredQuotes = [];

        for (var i in quotes) {
            if (quotes[i].quote.toLowerCase().includes(currentFilter.toLowerCase())) {

                //Check if the quote has the correct theme
                if (quotes[i].theme === currentTheme || currentTheme === "all") {
                    filteredQuotes.push(quotes[i]);
                }
            }
        }
        
        let tableRows = filteredQuotes.map((quote, index) =>
            <tr key={index}>
                <td>{quote.quote}</td> 
                <td>{quote.source}</td>
                <td>{quote.context}</td>
                <td>{quote.theme}</td>
            </tr>
        );

        //***Provide pagination for the table***

        //First, calculate how many pages we need
        let pages = [];

        for (let i = 0; i < Math.ceil(tableRows.length / 15); i++) {
            pages.push(i);
        }
        
        //Then, create buttons for each page
        let pageButtons = pages.map(index =>
            <button key={index} id={index} onClick={() => this.props.onPageChange(index)}>{index + 1}</button>
        );

        //Slice the tableRows array to simulate separate pages
        var firstQuote = currentPage * 15; //Display 15 results per page
        var lastQuote = firstQuote + 15;

        return (
            <div>
            {pageButtons}
            <table>
                <tr>
                <th>Quote</th>
                <th>Source</th>
                <th>Context</th>
                <th>Theme</th>
                </tr>
                {tableRows.slice(firstQuote, lastQuote)}
            </table>
            </div>
        );
    }
}
export default quotetable;